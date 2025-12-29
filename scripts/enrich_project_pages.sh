#!/usr/bin/env bash
set -euo pipefail

# enrich_project_pages.sh
# Adds `stars` and `language` frontmatter fields to existing
# `src/content/projects/<repo>/index.md` files and appends full README
# when helpful. Uses `/tmp/public_repos_full.json` (created by the
# earlier `gh repo list` call). If that file is missing, the script
# will recreate it.

JSON_FILE="/tmp/public_repos_full.json"

if [ ! -f "$JSON_FILE" ]; then
  echo "Generating $JSON_FILE via gh repo list..."
  gh repo list nmpegetis --limit 200 --json name,description,updatedAt,repositoryTopics,url,isFork,isArchived,visibility,stargazerCount,primaryLanguage > "$JSON_FILE"
fi

count=0
echo "Processing repos from $JSON_FILE"
for name in $(jq -r '.[] | select(.visibility=="PUBLIC" and .isFork==false and .isArchived==false) | .name' "$JSON_FILE"); do
  repo=$(jq -r --arg n "$name" '.[] | select(.name==$n)' "$JSON_FILE")
  stars=$(echo "$repo" | jq -r '.stargazerCount // 0')
  lang=$(echo "$repo" | jq -r '.primaryLanguage.name // ""')
  updatedAt=$(echo "$repo" | jq -r '.updatedAt | sub("T.*$"; "")')

  file="src/content/projects/$name/index.md"
  if [ ! -f "$file" ]; then
    echo "Warning: $file not found — skipping"
    continue
  fi

    # Use a small Python snippet to safely update YAML frontmatter
    export ENR_STARS="$stars"
    export ENR_LANG="$lang"
    export ENR_UPDATEDAT="$updatedAt"
    export ENR_FILE="$file"

    python3 - <<'PY'
import os, re
from pathlib import Path

f = Path(os.environ['ENR_FILE'])
txt = f.read_text()
if not txt.startswith('---'):
    print('No frontmatter in', f)
    # continue without failing
else:
    parts = txt.split('---', 2)
    fm = parts[1].strip().splitlines()
    body = parts[2].lstrip('\n')

    def has_key(lines, key):
        for L in lines:
            if re.match(r'^%s\s*:' % re.escape(key), L):
                return True
        return False

    new_lines = list(fm)
    stars = os.environ.get('ENR_STARS', '0')
    lang = os.environ.get('ENR_LANG', '')
    updatedAt = os.environ.get('ENR_UPDATEDAT', '')

    if not has_key(fm, 'stars'):
        new_lines.append(f'stars: {stars}')
    if not has_key(fm, 'language') and lang:
        new_lines.append(f'language: "{lang}"')
    if not has_key(fm, 'lastUpdated') and updatedAt:
        new_lines.append(f'lastUpdated: {updatedAt}')

    new_fm = '\n'.join(new_lines).strip() + '\n'
    out = '---\n' + new_fm + '---\n\n' + body
    f.write_text(out)
    print('Updated', f)
PY

  # Append full README if it exists and README not already present in body
  body_contains_readme=$(awk 'BEGIN{c=0} /# ?readme/i{c=1} END{print c}' "$file") || true
  if [ "$body_contains_readme" -eq 0 ]; then
    set +e
    readme_content=$(gh api repos/nmpegetis/$name/readme --jq '.content' 2>/dev/null)
    rc=$?
    set -e
    if [ $rc -eq 0 ] && [ -n "$readme_content" ]; then
      echo -e "\n\n---\n## README\n\n" >> "$file"
      echo "$readme_content" | base64 --decode >> "$file"
      echo -e "\n\n" >> "$file"
      echo "Appended README to $file"
    fi
  fi

  count=$((count+1))
done

echo "Done: processed $count files"
