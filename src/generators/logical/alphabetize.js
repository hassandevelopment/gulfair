import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'
import { ALPHA_WORDS } from '../../data/wordLists.js'

export function genAlphabetize(rng) {
  const word = rng.pick(ALPHA_WORDS)
  const sorted = [...word].sort()
  const which = rng.pick(['first', 'last'])
  const correct = which === 'first' ? sorted[0] : sorted[sorted.length - 1]
  const others = rng.shuffle([...word].filter((c) => c !== correct))

  const { options, correctIndex } = finalizeOptions(rng, correct, others, {
    format: String,
    topUp: (k, isTaken) => others.find((c) => !isTaken(c)),
  })

  return {
    id: nextId('logical-alpha'),
    section: 'logical',
    type: 'alphabetize',
    prompt: `Arrange the letters of "${word}" alphabetically. Which letter comes ${which}?`,
    options,
    correctIndex,
    explanation: `Alphabetical order: ${sorted.join(' ')}. The ${which} letter is ${correct}.`,
  }
}
