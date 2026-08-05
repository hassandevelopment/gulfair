import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

const L = (i) => String.fromCharCode(65 + i)

// Letter series with a fixed forward step, e.g. B D F H ?
export function genLetterSeries(rng) {
  const step = rng.randInt(1, 4)
  const start = rng.randInt(0, 25 - step * 4)
  const idxs = Array.from({ length: 4 }, (_, i) => start + i * step)
  const ansIdx = start + 4 * step
  const ans = L(ansIdx)

  const candidateIdxs = [ansIdx + 1, ansIdx - 1, ansIdx + step + 1, ansIdx - step, ansIdx + 2]
    .filter((i) => i >= 0 && i <= 25 && i !== ansIdx)
  const candidates = candidateIdxs.map(L)

  const { options, correctIndex } = finalizeOptions(rng, ans, candidates, {
    format: String,
    topUp: (k, isTaken) => {
      for (let i = 0; i <= 25; i++) {
        const c = L((ansIdx + 3 + k + i) % 26)
        if (!isTaken(c)) return c
      }
      return undefined
    },
  })

  return {
    id: nextId('logical-letterseries'),
    section: 'logical',
    type: 'letterSeries',
    prompt: `What comes next: ${idxs.map(L).join('  ')}  ?`,
    options,
    correctIndex,
    explanation: `Each letter moves ${step} step${step > 1 ? 's' : ''} forward in the alphabet: ${idxs.map(L).join(' ')} then ${ans}.`,
  }
}
