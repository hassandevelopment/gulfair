import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function genCountChars(rng) {
  const target = LETTERS[rng.randInt(0, 25)]
  const n = rng.randInt(3, 5)
  const total = rng.randInt(11, 14)
  const fillers = []
  while (fillers.length < total - n) {
    const c = LETTERS[rng.randInt(0, 25)]
    if (c !== target) fillers.push(c)
  }
  const str = rng.shuffle([...Array(n).fill(target), ...fillers]).join('')

  const { options, correctIndex } = finalizeOptions(rng, n, [n + 1, n - 1, n + 2, n - 2], { min: 0 })

  return {
    id: nextId('attention-count'),
    section: 'attention',
    type: 'countChars',
    prompt: `How many times does the letter ${target} appear in ${str}?`,
    options,
    correctIndex,
    explanation: `Scanning ${str} letter by letter, ${target} appears ${n} times.`,
  }
}
