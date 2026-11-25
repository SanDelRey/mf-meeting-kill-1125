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
const payload = checked(ENTRY)
if (payload.split(".").length < 2) throw new Error("entry needs its second sentence")
writeFileSync(join(outDir, "entry.txt"), payload, "utf8")
