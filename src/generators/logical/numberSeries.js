import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// Number series: arithmetic, geometric, alternating steps, squares, growing gap.
export function genNumberSeries(rng) {
  const kind = rng.pick(['arithmetic', 'geometric', 'alternating', 'squares', 'growing'])
  let terms, ans, rule, candidates

  if (kind === 'arithmetic') {
    const a = rng.randInt(1, 12)
    const d = rng.randInt(2, 9)
    terms = Array.from({ length: 4 }, (_, i) => a + i * d)
    ans = a + 4 * d
    rule = `Each term adds ${d}: ${terms[3]} + ${d} = ${ans}.`
    candidates = [ans + 1, ans - 1, ans + d, ans - d]
  } else if (kind === 'geometric') {
    const a = rng.randInt(2, 5)
    const r = rng.pick([2, 3])
    terms = Array.from({ length: 4 }, (_, i) => a * r ** i)
    ans = a * r ** 4
    rule = `Each term multiplies by ${r}: ${terms[3]} x ${r} = ${ans}.`
    candidates = [terms[3] * (r + 1), ans + r, ans - r, terms[3] + r]
  } else if (kind === 'alternating') {
    const a = rng.randInt(2, 6)
    let b
    do {
      b = rng.randInt(2, 6)
    } while (b === a)
    const start = rng.randInt(1, 10)
    terms = [start]
    for (let i = 0; i < 4; i++) terms.push(terms[i] + (i % 2 === 0 ? a : b))
    ans = terms.pop()
    rule = `The steps alternate +${a} and +${b}; the next step is +${a}: ${terms[3]} + ${a} = ${ans}.`
    candidates = [terms[3] + b, ans + 1, ans - 1, terms[3] + a + b]
  } else if (kind === 'squares') {
    const n = rng.randInt(1, 4)
    terms = Array.from({ length: 4 }, (_, i) => (n + i) ** 2)
    ans = (n + 4) ** 2
    rule = `These are square numbers: ${Array.from({ length: 4 }, (_, i) => `${n + i}x${n + i}`).join(', ')}; next is ${n + 4} x ${n + 4} = ${ans}.`
    candidates = [ans - 1, ans + 1, terms[3] + (terms[3] - terms[2]), ans + 2]
  } else {
    const start = rng.randInt(1, 8)
    const d0 = rng.randInt(2, 4)
    terms = [start]
    for (let i = 0; i < 4; i++) terms.push(terms[i] + d0 + i)
    ans = terms.pop()
    const nextStep = d0 + 3
    rule = `The gap grows by 1 each time (+${d0}, +${d0 + 1}, +${d0 + 2}); next gap is +${nextStep}: ${terms[3]} + ${nextStep} = ${ans}.`
    candidates = [terms[3] + d0 + 2, ans + 1, ans - 1, terms[3] + d0]
  }

  const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 0 })
  return {
    id: nextId('logical-numseries'),
    section: 'logical',
    type: 'numberSeries',
    prompt: `What comes next: ${terms.join(', ')}, ?`,
    options,
    correctIndex,
    explanation: rule,
  }
}
