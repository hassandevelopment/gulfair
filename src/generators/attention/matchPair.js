import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function mutate(rng, code) {
  const chars = [...code]
  const kind = rng.pick(['change', 'swap'])
  if (kind === 'swap') {
    for (let attempt = 0; attempt < 10; attempt++) {
      const i = rng.randInt(0, chars.length - 2)
      if (chars[i] !== '-' && chars[i + 1] !== '-' && chars[i] !== chars[i + 1]) {
        ;[chars[i], chars[i + 1]] = [chars[i + 1], chars[i]]
        return chars.join('')
      }
    }
  }
  let i
  do {
    i = rng.randInt(0, chars.length - 1)
  } while (chars[i] === '-')
  const original = chars[i]
  let r
  do {
    r = /\d/.test(original) ? String(rng.randInt(0, 9)) : LETTERS[rng.randInt(0, 25)]
  } while (r === original)
  chars[i] = r
  return chars.join('')
}

export function genMatchPair(rng) {
  const letters = Array.from({ length: 2 }, () => LETTERS[rng.randInt(0, 25)]).join('')
  const digits = Array.from({ length: 5 }, () => rng.randInt(0, 9)).join('')
  const tail = LETTERS[rng.randInt(0, 25)]
  const code = `${letters}-${digits}-${tail}`

  const candidates = Array.from({ length: 5 }, () => mutate(rng, code)).filter((c) => c !== code)

  const { options, correctIndex } = finalizeOptions(rng, code, candidates, {
    format: String,
    topUp: (k, isTaken) => {
      for (let i = 0; i < 10; i++) {
        const m = mutate(rng, code)
        if (m !== code && !isTaken(m)) return m
      }
      return undefined
    },
  })

  return {
    id: nextId('attention-match'),
    section: 'attention',
    type: 'matchPair',
    prompt: `Which option exactly matches: ${code}`,
    options,
    correctIndex,
    explanation: `Only ${code} matches character by character; each other option changes or swaps one character.`,
  }
}
