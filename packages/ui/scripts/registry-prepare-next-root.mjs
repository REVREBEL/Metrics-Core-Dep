import { promises as fs } from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const appLink = path.join(ROOT, "app")
const appTarget = path.join(ROOT, "registry", "app")

async function main() {
  try {
    const stat = await fs.lstat(appLink)
    if (stat.isSymbolicLink()) {
      const existing = await fs.readlink(appLink)
      if (existing === "registry/app" || path.resolve(ROOT, existing) === appTarget) {
        console.log("[registry:prepare] app symlink already configured")
        return
      }
      throw new Error(`app path already exists as symlink to ${existing}`)
    }
    throw new Error("app path already exists and is not a symlink")
  } catch (error) {
    if (error && error.code === "ENOENT") {
      await fs.symlink("registry/app", appLink, "dir")
      console.log("[registry:prepare] created app -> registry/app symlink")
      return
    }
    throw error
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
