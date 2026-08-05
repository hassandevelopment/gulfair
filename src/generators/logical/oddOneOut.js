import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'
import { ODD_GROUPS } from '../../data/wordLists.js'

export function genOddOneOut(rng) {
  const catA = rng.pick(ODD_GROUPS)
  let catB
  do {
    catB = rng.pick(ODD_GROUPS)
  } while (catB.key === catA.key || catA.avoid.includes(catB.key) || catB.avoid.includes(catA.key))

  const three = rng.shuffle(catA.words).slice(0, 3)
  const odd = rng.pick(catB.words)

  const { options, correctIndex } = finalizeOptions(rng, odd, three, { format: String })

  return {
    id: nextId('logical-odd'),
    section: 'logical',
    type: 'oddOneOut',
    prompt: 'Which one does not belong?',
    options,
    correctIndex,
    explanation: `${three.join(', ')} are ${catA.label}; ${odd} is a ${catB.singular}.`,
  }
}
