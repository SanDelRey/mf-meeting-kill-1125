import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 200

function checked(text: string): string {
  const trimmed = text.trim()
  if (trimmed.length === 0 || trimmed !== text || text.length > LIMIT) {
    throw new RangeError("entry out of bounds: " + text.length)
  }
  return text
}

const ENTRY = "Nothing changed, nobody is blocked, and the deadline is still Friday. That was the meeting; it is also the email nobody reads."
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), checked(ENTRY), "utf8")
