import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'
import { CODE_WORDS } from '../../data/wordLists.js'

const enc = (word, shift) =>
  [...word]
    .map((c) => String.fromCharCode(((c.charCodeAt(0) - 65 + shift + 26) % 26) + 65))
    .join('')

// Simple shift cipher: "CAT is written as DBU, how is DOG written?"
export function genCoding(rng) {
  const shift = rng.randInt(1, 3)
  const example = rng.pick(CODE_WORDS)
  let target
  do {
    target = rng.pick(CODE_WORDS)
  } while (target === example)

  const correct = enc(target, shift)
  const candidates = [enc(target, -shift), enc(target, shift + 1), enc(target, shift - 1), enc(target, shift + 2)]
    .filter((w) => w !== target)

  const { options, correctIndex } = finalizeOptions(rng, correct, candidates, {
    format: String,
    topUp: (k, isTaken) => {
      for (let s = 4; s < 26; s++) {
        const w = enc(target, shift + s)
        if (!isTaken(w)) return w
      }
      return undefined
    },
  })

  return {
    id: nextId('logical-coding'),
    section: 'logical',
    type: 'coding',
    prompt: `In a certain code, ${example} is written as ${enc(example, shift)}. How is ${target} written in the same code?`,
    options,
    correctIndex,
    explanation: `Every letter moves ${shift} step${shift > 1 ? 's' : ''} forward: ${example} becomes ${enc(example, shift)}, so ${target} becomes ${correct}.`,
  }
}
