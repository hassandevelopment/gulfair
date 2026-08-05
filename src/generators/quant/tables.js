import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// Times tables and chained arithmetic: 7 x 8, 3 x 27, 3 x 4 x 2 + 20.
// Level 1: plain tables. Level 2: mixed. Level 3: bigger factors and chains.
export function genTables(rng, level = 2) {
  const kind =
    level === 1 ? 'small' : level === 2 ? rng.pick(['small', 'stretch', 'chain']) : rng.pick(['stretch', 'chain'])

  if (kind === 'small') {
    const a = rng.randInt(3, 12)
    const b = rng.randInt(3, 12)
    const ans = a * b
    const candidates = [(a + 1) * b, a * (b + 1), ans - a, ans + a, ans - 1, ans + 1]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
    return {
      id: nextId('quant-tables'),
      section: 'quant',
      type: 'tables',
      prompt: `${a} x ${b}`,
      options,
      correctIndex,
      explanation: `${a} x ${b} = ${ans}. Straight times table recall.`,
    }
  }

  if (kind === 'stretch') {
    const a = level === 3 ? rng.randInt(3, 6) : rng.randInt(2, 4)
    const b = level === 3 ? rng.randInt(21, 49) : rng.randInt(13, 30)
    const ans = a * b
    const tens = Math.floor(b / 10) * 10
    const ones = b - tens
    const candidates = [a * (b + 1), a * (b - 1), ans + 10, ans - 10, (a + 1) * b]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
    return {
      id: nextId('quant-tables'),
      section: 'quant',
      type: 'tables',
      prompt: `${a} x ${b}`,
      options,
      correctIndex,
      explanation: `Split ${b}: ${a} x ${tens} = ${a * tens}, ${a} x ${ones} = ${a * ones}, so ${a * tens} + ${a * ones} = ${ans}.`,
    }
  }

  // chain: a x b x c + d
  const a = level === 3 ? rng.randInt(3, 6) : rng.randInt(2, 4)
  const b = level === 3 ? rng.randInt(3, 6) : rng.randInt(2, 5)
  const c = rng.randInt(2, 3)
  const d = level === 3 ? rng.pick([20, 30, 40, 50, 60, 70, 80, 90]) : rng.pick([10, 20, 30, 40, 50])
  const prod = a * b * c
  const ans = prod + d
  const candidates = [
    prod, // forgot to add d
    a * b + c + d, // dropped a multiply
    prod + d + 10,
    prod + d - 10,
    a * b * (c + d), // wrong order
  ]
  const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
  return {
    id: nextId('quant-tables'),
    section: 'quant',
    type: 'tables',
    prompt: `${a} x ${b} x ${c} + ${d}`,
    options,
    correctIndex,
    explanation: `Multiply left to right: ${a} x ${b} = ${a * b}, x ${c} = ${prod}, then + ${d} = ${ans}.`,
  }
}
