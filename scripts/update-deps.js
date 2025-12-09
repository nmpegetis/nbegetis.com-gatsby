const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const pkgPath = path.resolve(__dirname, "..", "package.json")
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"))

function updateSection(sectionName) {
  if (!pkg[sectionName]) return
  const deps = pkg[sectionName]
  console.log(`Updating ${sectionName} (${Object.keys(deps).length} entries)`)
  for (const [name, current] of Object.entries(deps)) {
    try {
      const latest = execSync(`npm view ${name} version`, {
        stdio: ["pipe", "pipe", "ignore"],
      })
        .toString()
        .trim()
      if (latest) {
        // preserve caret
        deps[name] = `^${latest}`
        console.log(`  ${name}: ${current} -> ^${latest}`)
      }
    } catch (err) {
      console.error(`  Failed to get ${name}: ${err.message}`)
    }
  }
}

updateSection("dependencies")
updateSection("devDependencies")

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n")
console.log("package.json updated.")
