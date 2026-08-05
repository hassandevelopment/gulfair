import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// Clean division by construction: dividend = divisor x quotient. 93/3, 84/4, 45/3.
export function genDivision(rng, level = 2) {
  const d = level === 1 ? rng.randInt(2, 5) : level === 2 ? rng.randInt(2, 9) : rng.randInt(3, 12)
  const q = level === 1 ? rng.randInt(3, 12) : level === 2 ? rng.randInt(4, 25) : rng.randInt(12, 40)
  const n = d * q

  const tens = Math.floor(n / d / 10) * 10 * d // largest clean tens chunk
  const chunkA = tens / d
  const chunkB = (n - tens) / d
  const explanation =
    chunkA > 0 && chunkB > 0
      ? `${n} / ${d}: ${tens} / ${d} = ${chunkA}, ${n - tens} / ${d} = ${chunkB}, so ${chunkA} + ${chunkB} = ${q}.`
      : `${n} / ${d} = ${q}, because ${d} x ${q} = ${n}.`

  const candidates = [q + 1, q - 1, q + 2, q - 2, Math.round(n / (d + 1))]
  const { options, correctIndex } = finalizeOptions(rng, q, candidates, { min: 1 })

  return {
    id: nextId('quant-div'),
    section: 'quant',
    type: 'division',
    prompt: `${n} / ${d}`,
    options,
    correctIndex,
    explanation,
  }
}
