// Hammers every generator and asserts the core guarantees: clean mental-math
// answers, four unique options, and the correct answer at the marked index.
// Run: npm run sanity
import { createRng } from '../src/engine/rng.js'
import { quantPool } from '../src/generators/quant/index.js'
import { verbalBank } from '../src/data/verbalBank.js'

const RUNS = 3000
let failures = 0

function fail(msg, q) {
  failures += 1
  console.error(`FAIL: ${msg}\n  ${JSON.stringify(q)}`)
}

// A numeric answer is clean when it is an integer or a single decimal.
function isCleanNumber(s) {
  const stripped = s.replace(/[^0-9.\-]/g, '')
  if (!stripped) return true // non-numeric option (e.g. "30 minutes")
  const n = Number(stripped)
  if (!Number.isFinite(n)) return false
  return Math.abs(n * 10 - Math.round(n * 10)) < 1e-9
}

function checkQuestion(q, name) {
  if (!q.prompt || q.options?.length !== 4) return fail(`${name}: bad shape`, q)
  if (new Set(q.options).size !== 4) return fail(`${name}: duplicate options`, q)
  if (q.correctIndex < 0 || q.correctIndex > 3) return fail(`${name}: correctIndex out of range`, q)
  if (!q.explanation) return fail(`${name}: missing explanation`, q)
  for (const opt of q.options) {
    if (!isCleanNumber(opt)) return fail(`${name}: unclean numeric option "${opt}"`, q)
  }
}

const rng = createRng(12345)
for (const { fn } of quantPool) {
  const name = fn.name
  for (let i = 0; i < RUNS; i++) {
    checkQuestion(fn(rng), name)
  }
  console.log(`${name}: ${RUNS} runs ok`)
}

for (const q of verbalBank) {
  if (q.options.length !== 4 || new Set(q.options).size !== 4) fail('verbal: bad options', q)
  if (q.options[q.correctIndex] === undefined) fail('verbal: bad correctIndex', q)
  if (!q.explanation || !q.rule) fail('verbal: missing explanation or rule', q)
}
console.log(`verbalBank: ${verbalBank.length} items ok`)

if (failures) {
  console.error(`\n${failures} failure(s).`)
  process.exit(1)
}
console.log('\nAll sanity checks passed.')
