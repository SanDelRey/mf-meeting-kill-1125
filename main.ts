import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

// The single sentence that could have replaced a pointless meeting.
const line: string = "Nothing changed, nobody is blocked, and the deadline is still Friday. That was the meeting; it is also the email you didn't read."
if (line.length < 1 || line.length > 200) throw new Error("entry must be 1..200 characters: " + line.length)

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")

if (line.trim() !== line || line.trim().length === 0) throw new Error("entry must be non-empty with no surrounding whitespace")
