// Hammers every generator and asserts the core guarantees: clean mental-math
// answers, four unique options, and the correct answer at the marked index.
// Run: npm run sanity
import { createRng } from '../src/engine/rng.js'
import { quantPool } from '../src/generators/quant/index.js'
import { logicalPool } from '../src/generators/logical/index.js'
import { attentionPool } from '../src/generators/attention/index.js'
import { abstractPool } from '../src/generators/abstract/index.js'
import { sdtPool, genSdtSection } from '../src/generators/sdt/index.js'
import { genSdt } from '../src/generators/quant/sdt.js'
import { canonical } from '../src/generators/abstract/shapes.js'
import { verbalBank } from '../src/data/verbalBank.js'
import { personalityItems, TRAITS } from '../src/data/personalityItems.js'
import { oralBank, isComplete, ORAL_CATEGORIES } from '../src/data/oralBank.js'

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
  ['sdt', sdtPool, { numeric: true }],
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

if (personalityItems.length < 114) fail(`personality bank too small: ${personalityItems.length} < 114`, {})
if (new Set(personalityItems.map((i) => i.text)).size !== personalityItems.length) fail('personality: duplicate statements', {})
for (const item of personalityItems) {
  if (!TRAITS[item.trait]) fail(`personality: unknown trait "${item.trait}"`, item)
}
const reversedShare = personalityItems.filter((i) => i.reversed).length / personalityItems.length
if (reversedShare < 0.4 || reversedShare > 0.6) fail(`personality: reversed share off balance (${reversedShare})`, {})
console.log(`personalityItems: ${personalityItems.length} unique items ok (${Math.round(reversedShare * 100)}% reverse-keyed)`)

// SDT prompts must stay physically plausible: no ground vehicle that flies,
// no aircraft that drives, and speeds that match the vehicle.
function checkSdtPlausibility(q, name) {
  const p = q.prompt
  if (/\b(car|bus|train|truck|ferry)\b/i.test(p) && /\bflies\b/i.test(p)) fail(`${name}: ground vehicle flies`, q)
  if (/\b(plane|aircraft|flight)\b/i.test(p) && /\b(drives|sails)\b/i.test(p)) fail(`${name}: aircraft drives or sails`, q)
  const speeds = [...p.matchAll(/(?:at|doing|of) (\d+) km\/h/g)].map((m) => Number(m[1]))
  for (const s of speeds) {
    if (/\b(car|bus)\b/i.test(p) && s > 130) fail(`${name}: car or bus at ${s} km/h`, q)
    if (/\btrain\b/i.test(p) && s > 320) fail(`${name}: train at ${s} km/h`, q)
    if (/\b(plane|aircraft)\b/i.test(p) && s < 150) fail(`${name}: aircraft at only ${s} km/h`, q)
  }
}
for (const [fn, fnName] of [[genSdtSection, 'sdt/plausibility'], [genSdt, 'quant-sdt/plausibility']]) {
  for (const level of [1, 2, 3]) {
    for (let i = 0; i < RUNS; i++) {
      checkSdtPlausibility(fn(rng, level), `${fnName} L${level}`)
    }
  }
}
console.log('sdt plausibility: vehicles, verbs and speeds consistent')

const oralIds = new Set(oralBank.map((q) => q.id))
if (oralIds.size !== oralBank.length) fail('oral: duplicate ids', {})
for (const q of oralBank) {
  if (!/^oral-(aero|perf|inst|met|nav|gen)-\d{2}$/.test(q.id)) fail('oral: bad id', q)
  if (!Number.isInteger(q.frequency) || q.frequency < 1 || q.frequency > 5) fail('oral: bad frequency', q)
  if (!ORAL_CATEGORIES.includes(q.category)) fail(`oral: unknown category "${q.category}"`, q)
  if (!q.question?.trim()) fail('oral: empty question', q)
  const hasAny = q.conceptExplanation || q.spokenVersion || q.mcq || q.flashcardAnswer
  if (hasAny && !isComplete(q)) fail('oral: half-complete entry', q)
  if (q.mcq && (q.mcq.options.length !== 4 || new Set(q.mcq.options).size !== 4)) fail('oral: bad mcq options', q)
  if (q.mcq && q.mcq.options[q.mcq.correctIndex] === undefined) fail('oral: bad mcq correctIndex', q)
  if (q.spokenVersion && (q.spokenVersion.length < 3 || q.spokenVersion.length > 6)) fail('oral: spokenVersion out of range', q)
}
const oralComplete = oralBank.filter(isComplete).length
console.log(`oralBank: ${oralBank.length} items ok (${oralComplete} complete)`)

if (failures) {
  console.error(`\n${failures} failure(s).`)
  process.exit(1)
}
console.log('\nAll sanity checks passed.')
