import { finalizeOptions, fmt } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

const PERCENTS = [10, 20, 25, 30, 40, 50, 60, 75, 80, 90]

function mentalMethod(p, n, a) {
  if (p === 50) return `50% is half: ${fmt(n)} / 2 = ${fmt(a)}.`
  if (p === 25) return `25% is a quarter: ${fmt(n)} / 4 = ${fmt(a)}.`
  if (p === 75) return `75% is three quarters: ${fmt(n)} / 4 = ${fmt(n / 4)}, times 3 = ${fmt(a)}.`
  const tenth = n / 10
  return `10% of ${fmt(n)} is ${fmt(tenth)}; ${p}% is ${p / 10} times that: ${p / 10} x ${fmt(tenth)} = ${fmt(a)}.`
}

// Clean by construction: accept only (p, n) pairs where p*n resolves to an
// integer or a single decimal, e.g. 30% of 6 = 1.8, 25% of 12 = 3.
// Level 1: small bases. Level 2: medium. Level 3: large round bases like 240.
export function genPercent(rng, level = 2) {
  let p, n, times10
  do {
    p = rng.pick(PERCENTS)
    n = level === 3 ? 10 * rng.randInt(4, 40) : rng.randInt(2, level === 1 ? 20 : 60)
    times10 = p * n // answer * 1000; clean iff divisible by 100 (one decimal max)
  } while (times10 % 100 !== 0)
  const a = times10 / 100

  const candidates = [
    a * 10, // decimal shifted up
    a / 10, // decimal shifted down
    ((100 - p) * n) / 100, // took the complement percent
    n - a, // subtracted instead
    a + (Number.isInteger(a) ? 1 : 0.1),
    a - (Number.isInteger(a) ? 1 : 0.1),
  ]
  const { options, correctIndex } = finalizeOptions(rng, a, candidates, {
    min: 0.1,
    step: Number.isInteger(a) ? 1 : 0.1,
  })

  return {
    id: nextId('quant-percent'),
    section: 'quant',
    type: 'percent',
    prompt: `What is ${p}% of ${n}?`,
    options,
    correctIndex,
    explanation: mentalMethod(p, n, a),
  }
}
