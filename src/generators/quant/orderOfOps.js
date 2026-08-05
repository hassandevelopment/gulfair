import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// Order of operations with clean intermediate values: 27 / 9 x 6, 12 + 8 / 4.
export function genOrderOfOps(rng) {
  const kind = rng.pick(['divmul', 'adddiv', 'submul'])

  if (kind === 'divmul') {
    // a / b x c, left to right
    const b = rng.randInt(2, 9)
    const quotient = rng.randInt(2, 9)
    const a = b * quotient
    const c = rng.randInt(2, 9)
    const ans = quotient * c
    const wrongGrouped = b * c !== 0 && a % (b * c) === 0 ? a / (b * c) : null
    const candidates = [wrongGrouped, ans + c, ans - c, ans + 1, ans - 1].filter((v) => v !== null)
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
    return {
      id: nextId('quant-ops'),
      section: 'quant',
      type: 'orderOfOps',
      prompt: `${a} / ${b} x ${c}`,
      options,
      correctIndex,
      explanation: `Same-rank operations go left to right: ${a} / ${b} = ${quotient}, then ${quotient} x ${c} = ${ans}.`,
    }
  }

  if (kind === 'adddiv') {
    // a + b / c, division first
    const c = rng.randInt(2, 6)
    const quotient = rng.randInt(2, 9)
    const b = c * quotient
    const a = rng.randInt(5, 30)
    const ans = a + quotient
    const wrongFirst = (a + b) % c === 0 ? (a + b) / c : null
    const candidates = [wrongFirst, a + b, ans + 1, ans - 1].filter((v) => v !== null)
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
    return {
      id: nextId('quant-ops'),
      section: 'quant',
      type: 'orderOfOps',
      prompt: `${a} + ${b} / ${c}`,
      options,
      correctIndex,
      explanation: `Division before addition: ${b} / ${c} = ${quotient}, then ${a} + ${quotient} = ${ans}.`,
    }
  }

  // a - b x c, multiplication first, kept positive
  const b = rng.randInt(2, 6)
  const c = rng.randInt(2, 5)
  const prod = b * c
  const a = prod + rng.randInt(2, 20)
  const ans = a - prod
  const candidates = [(a - b) * c, ans + 1, ans - 1, ans + b]
  const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 0 })
  return {
    id: nextId('quant-ops'),
    section: 'quant',
    type: 'orderOfOps',
    prompt: `${a} - ${b} x ${c}`,
    options,
    correctIndex,
    explanation: `Multiplication before subtraction: ${b} x ${c} = ${prod}, then ${a} - ${prod} = ${ans}.`,
  }
}
