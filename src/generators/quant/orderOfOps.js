import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// Order of operations (BEDMAS) with clean intermediate values.
// Level 1: two operations. Level 2: three terms. Level 3: brackets and four terms.
export function genOrderOfOps(rng, level = 2) {
  const kind =
    level === 1
      ? rng.pick(['adddiv', 'submul'])
      : level === 2
        ? rng.pick(['divmul', 'adddiv', 'submul'])
        : rng.pick(['parenAddMul', 'mulParenSub', 'fourTerm'])

  if (kind === 'parenAddMul') {
    // (a + b) x c, brackets first
    const a = rng.randInt(2, 9)
    const b = rng.randInt(2, 9)
    const c = rng.randInt(2, 6)
    const ans = (a + b) * c
    const candidates = [a + b * c, ans + c, ans - c, ans + 1]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
    return {
      id: nextId('quant-ops'),
      section: 'quant',
      type: 'orderOfOps',
      prompt: `(${a} + ${b}) x ${c}`,
      options,
      correctIndex,
      explanation: `Brackets first: ${a} + ${b} = ${a + b}, then ${a + b} x ${c} = ${ans}.`,
    }
  }

  if (kind === 'mulParenSub') {
    // a x (b - c) + d
    const c2 = rng.randInt(2, 6)
    const b2 = c2 + rng.randInt(2, 6)
    const a = rng.randInt(3, 9)
    const d = rng.pick([10, 20, 30, 40, 50])
    const ans = a * (b2 - c2) + d
    const candidates = [a * b2 - c2 + d, a * (b2 - c2), ans + a, ans - a]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
    return {
      id: nextId('quant-ops'),
      section: 'quant',
      type: 'orderOfOps',
      prompt: `${a} x (${b2} - ${c2}) + ${d}`,
      options,
      correctIndex,
      explanation: `Brackets first: ${b2} - ${c2} = ${b2 - c2}, then x ${a} = ${a * (b2 - c2)}, then + ${d} = ${ans}.`,
    }
  }

  if (kind === 'fourTerm') {
    // a + b x c - d, multiplication first, kept positive
    const b = rng.randInt(3, 8)
    const c = rng.randInt(3, 6)
    const prod = b * c
    const d = rng.randInt(2, Math.min(9, prod - 1))
    const a = rng.randInt(5, 30)
    const ans = a + prod - d
    const candidates = [(a + b) * c - d, ans + 1, ans - 1, a + prod + d]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
    return {
      id: nextId('quant-ops'),
      section: 'quant',
      type: 'orderOfOps',
      prompt: `${a} + ${b} x ${c} - ${d}`,
      options,
      correctIndex,
      explanation: `Multiplication first: ${b} x ${c} = ${prod}, then ${a} + ${prod} - ${d} = ${ans}.`,
    }
  }

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
