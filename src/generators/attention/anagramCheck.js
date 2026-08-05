import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'
import { ANAGRAM_WORDS } from '../../data/wordLists.js'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function scramble(rng, word) {
  let s = word
  let guard = 0
  while (s === word && guard < 20) {
    s = rng.shuffle([...word]).join('')
    guard += 1
  }
  return s
}

// Scramble plus one letter swapped, so the pair is NOT an anagram.
function falsePair(rng, word) {
  const chars = rng.shuffle([...word])
  const i = rng.randInt(0, chars.length - 1)
  let replacement
  do {
    replacement = LETTERS[rng.randInt(0, 25)]
  } while (word.includes(replacement))
  chars[i] = replacement
  return `${word} / ${chars.join('')}`
}

export function genAnagramCheck(rng) {
  const words = rng.shuffle(ANAGRAM_WORDS).slice(0, 4)
  const trueWord = words[0]
  const scrambled = scramble(rng, trueWord)
  const correct = `${trueWord} / ${scrambled}`
  const candidates = words.slice(1).map((w) => falsePair(rng, w))

  const { options, correctIndex } = finalizeOptions(rng, correct, candidates, {
    format: String,
    topUp: (k, isTaken) => {
      const w = words[1 + (k % 3)]
      for (let i = 0; i < 10; i++) {
        const p = falsePair(rng, w)
        if (!isTaken(p)) return p
      }
      return undefined
    },
  })

  return {
    id: nextId('attention-anagram'),
    section: 'attention',
    type: 'anagramCheck',
    prompt: 'Which pair uses exactly the same letters?',
    options,
    correctIndex,
    explanation: `${trueWord} and ${scrambled} contain the same letters, just reordered. In each other pair, one letter has been changed.`,
  }
}
