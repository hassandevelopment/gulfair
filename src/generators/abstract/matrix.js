import { nextId } from '../../engine/rng.js'
import { canonical } from './shapes.js'

const SHAPES = ['circle', 'square', 'triangle', 'arrow']

// Build a 4-cell sequence from a transform rule, show the first three cells,
// and ask for the fourth. Exactly one option is correct by construction:
// distractors mutate one attribute and are deduped by canonical form.
export function genAbstract(rng) {
  const rule = rng.pick(['rotate', 'count', 'fill', 'scale', 'rotateFill', 'countFill'])

  const base = {
    shape: rule.startsWith('rotate') ? 'arrow' : rng.pick(SHAPES),
    rotation: 0,
    count: 1,
    fill: rng.pick(['none', 'solid']),
    scale: 1,
  }
  const step = rng.pick([45, 90])
  const startRot = rng.pick([0, 45, 90, 180])

  const cellAt = (i) => {
    const c = { ...base }
    if (rule === 'rotate' || rule === 'rotateFill') c.rotation = (startRot + i * step) % 360
    if (rule === 'count' || rule === 'countFill') c.count = 1 + i
    if (rule === 'fill' || rule === 'rotateFill' || rule === 'countFill')
      c.fill = i % 2 === 0 ? base.fill : base.fill === 'none' ? 'solid' : 'none'
    if (rule === 'scale') c.scale = i % 2 === 0 ? 1 : 0.65
    return c
  }

  const cells = [cellAt(0), cellAt(1), cellAt(2)]
  const correct = cellAt(3)

  // Candidate single-attribute mutations of the correct answer.
  const mutations = []
  mutations.push({ ...correct, rotation: (correct.rotation + step) % 360 })
  mutations.push({ ...correct, rotation: (correct.rotation + 360 - step) % 360 })
  mutations.push({ ...correct, count: correct.count >= 4 ? correct.count - 1 : correct.count + 1 })
  mutations.push({ ...correct, count: correct.count <= 1 ? correct.count + 2 : correct.count - 1 })
  mutations.push({ ...correct, fill: correct.fill === 'none' ? 'solid' : 'none' })
  mutations.push({ ...correct, scale: correct.scale === 1 ? 0.65 : 1 })
  for (const s of SHAPES) {
    if (s !== correct.shape) mutations.push({ ...correct, shape: s })
  }

  const seen = new Set([canonical(correct)])
  const wrongs = []
  for (const m of rng.shuffle(mutations)) {
    if (wrongs.length === 3) break
    const key = canonical(m)
    if (seen.has(key)) continue
    seen.add(key)
    wrongs.push(m)
  }

  const options = rng.shuffle([correct, ...wrongs])
  const correctIndex = options.findIndex((o) => canonical(o) === canonical(correct))

  const ruleText = {
    rotate: `The arrow rotates ${step} degrees clockwise each step.`,
    count: 'The number of shapes increases by one each step.',
    fill: 'The fill alternates between outline and solid each step.',
    scale: 'The size alternates between large and small each step.',
    rotateFill: `The arrow rotates ${step} degrees each step while the fill alternates between outline and solid.`,
    countFill: 'The number of shapes increases by one while the fill alternates between outline and solid.',
  }[rule]

  return {
    id: nextId('abstract'),
    section: 'abstract',
    type: rule,
    prompt: 'Which figure completes the sequence?',
    figure: { cells, missingIndex: 3 },
    options,
    correctIndex,
    explanation: ruleText,
  }
}
