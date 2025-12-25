#!/usr/bin/env bash
set -euo pipefail

# generate_project_pages.sh
#
# Fetches public, non-fork, non-archived repositories for the
# authenticated GitHub user (nmpegetis) and creates a markdown
# project page under `src/content/projects/<repo>/index.md` for each
# repo found.
#
# Frontmatter generated:
# - title: repo name
# - date: repo.updatedAt (YYYY-MM-DD)
# - tags: GitHub topics (if any)
# - repo: repo URL
#
# Body: repository description followed by the first paragraph of
# README (if present).
#
# Usage:
#   ./scripts/generate_project_pages.sh
#

JSON_FILE="/tmp/public_repos.json"

echo "Fetching public repositories metadata into $JSON_FILE..."
gh repo list nmpegetis --limit 200 --json name,description,updatedAt,repositoryTopics,url,isFork,isArchived,visibility > "$JSON_FILE"

echo "Creating project markdown files under src/content/projects/..."
count=0
for name in $(jq -r '.[] | select(.visibility=="PUBLIC" and .isFork==false and .isArchived==false) | .name' "$JSON_FILE"); do
  repo_json=$(jq -r --arg name "$name" '.[] | select(.name==$name)' "$JSON_FILE")
  title=$(echo "$repo_json" | jq -r .name)
  desc=$(echo "$repo_json" | jq -r '.description // ""')
  date=$(echo "$repo_json" | jq -r .updatedAt | cut -c1-10)
  topics=$(echo "$repo_json" | jq -r '.repositoryTopics | if . == null then [] else (.[] | .name) end')
  url=$(echo "$repo_json" | jq -r .url)

  dir="src/content/projects/$title"
  if [ -d "$dir" ]; then
    echo "Skipping existing $dir"
    continue
  fi
  mkdir -p "$dir"
  file="$dir/index.md"

  {
    echo "---"
    echo "title: \"$title\""
    echo "date: $date"
    if [ -z "$(echo "$topics")" ]; then
      echo "tags: []"
    else
      echo "tags:"
      echo "$topics" | while IFS= read -r t; do
        [ -z "$t" ] && continue
        echo "  - $t"
      done
    fi
    echo "repo: $url"
    echo "---"
    echo
    if [ -n "$desc" ] && [ "$desc" != "null" ]; then
      echo "$desc"
      echo
    fi
  } > "$file"

  # Try to get README first paragraph
  if readme_content=$(gh api repos/nmpegetis/$name/readme --jq '.content' 2>/dev/null || true); then
    if [ -n "$readme_content" ]; then
      echo "$readme_content" | base64 --decode | awk 'BEGIN{RS="\n\n";ORS="\n\n"} NR==1{gsub("\n"," "); print}' >> "$file" || true
    fi
  fi

  echo "Created $file"
  count=$((count+1))
done

echo "Done: created $count project files"
