// Hammers every generator and asserts the core guarantees: clean mental-math
// answers, four unique options, and the correct answer at the marked index.
// Run: npm run sanity
import { createRng } from '../src/engine/rng.js'
import { quantPool } from '../src/generators/quant/index.js'
import { logicalPool } from '../src/generators/logical/index.js'
import { attentionPool } from '../src/generators/attention/index.js'
import { abstractPool } from '../src/generators/abstract/index.js'
import { canonical } from '../src/generators/abstract/shapes.js'
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
  if (!stripped || stripped === '-') return true // non-numeric option
  const n = Number(stripped)
  if (!Number.isFinite(n)) return false
  return Math.abs(n * 10 - Math.round(n * 10)) < 1e-9
}

function checkQuestion(q, name, { numeric = false } = {}) {
  if (!q.prompt || q.options?.length !== 4) return fail(`${name}: bad shape`, q)
  if (q.correctIndex < 0 || q.correctIndex > 3) return fail(`${name}: correctIndex out of range`, q)
  if (!q.explanation) return fail(`${name}: missing explanation`, q)

  if (q.type === 'findDifferent') {
    // three identical + one different by design
    const distinct = new Set(q.options)
    if (distinct.size !== 2) return fail(`${name}: expected exactly 2 distinct strings`, q)
    const odd = q.options[q.correctIndex]
    if (q.options.filter((o) => o === odd).length !== 1) return fail(`${name}: correct is not the unique one`, q)
    return
  }

  if (q.section === 'abstract') {
    const keys = q.options.map(canonical)
    if (new Set(keys).size !== 4) return fail(`${name}: visually duplicate abstract options`, q)
    if (q.figure?.cells?.length !== 3) return fail(`${name}: bad figure`, q)
    return
  }

  if (new Set(q.options).size !== 4) return fail(`${name}: duplicate options`, q)
  if (numeric) {
    for (const opt of q.options) {
      if (!isCleanNumber(opt)) return fail(`${name}: unclean numeric option "${opt}"`, q)
    }
  }
}

const rng = createRng(12345)
const pools = [
  ['quant', quantPool, { numeric: true }],
  ['logical', logicalPool, {}],
  ['attention', attentionPool, {}],
  ['abstract', abstractPool, {}],
]
for (const [poolName, pool, opts] of pools) {
  for (const { fn } of pool) {
    for (const level of [1, 2, 3]) {
      const name = `${poolName}/${fn.name} L${level}`
      for (let i = 0; i < RUNS; i++) {
        checkQuestion(fn(rng, level), name, opts)
      }
    }
    console.log(`${poolName}/${fn.name}: ${RUNS} runs x 3 levels ok`)
  }
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
