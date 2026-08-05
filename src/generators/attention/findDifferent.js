import { nextId } from '../../engine/rng.js'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function makeCode(rng) {
  const letters = Array.from({ length: rng.randInt(2, 3) }, () => LETTERS[rng.randInt(0, 25)]).join('')
  const digits = Array.from({ length: rng.randInt(4, 5) }, () => rng.randInt(0, 9)).join('')
  return `${letters}-${digits}`
}

// Three identical strings, one differs by a single character. Options are
// assembled by hand because the duplicates are the whole point.
export function genFindDifferent(rng) {
  const base = makeCode(rng)
  const chars = [...base]
  let i
  do {
    i = rng.randInt(0, chars.length - 1)
  } while (chars[i] === '-')
  const original = chars[i]
  let replacement
  do {
    replacement = /\d/.test(original) ? String(rng.randInt(0, 9)) : LETTERS[rng.randInt(0, 25)]
  } while (replacement === original)
  chars[i] = replacement
  const different = chars.join('')

  const correctIndex = rng.randInt(0, 3)
  const options = [base, base, base, base]
  options[correctIndex] = different

  return {
    id: nextId('attention-different'),
    section: 'attention',
    type: 'findDifferent',
    prompt: 'Three of these are identical. Which one is different?',
    options,
    correctIndex,
    explanation: `The odd one out is ${different}: character ${i + 1} is ${replacement} instead of ${original} (${base}).`,
  }
}
