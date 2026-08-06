import { quantPool } from '../generators/quant/index.js'
import { logicalPool } from '../generators/logical/index.js'
import { attentionPool } from '../generators/attention/index.js'
import { abstractPool } from '../generators/abstract/index.js'
import { sdtPool } from '../generators/sdt/index.js'
import { verbalBank } from '../data/verbalBank.js'
import { makeGeneratorSource, makeBankSource, makeMockSource } from './sources.js'
import { getVerbalCycle, saveVerbalCycle } from '../storage/storage.js'

// Section metadata drives the home screen. Order matches the real exam.
export const SECTIONS = [
  { key: 'personality', num: 1, name: 'Personality Profiler', blurb: 'Likert statements, unscored', scored: false, ready: true },
  { key: 'quant', num: 2, name: 'Quantitative Aptitude', blurb: 'Percentages, tables, speed and distance', scored: true, ready: true },
  { key: 'logical', num: 3, name: 'Logical Reasoning', blurb: 'Series, alphabetizing, odd one out', scored: true, ready: true },
  { key: 'verbal', num: 4, name: 'Verbal Ability', blurb: 'Grammar, confusables, vocabulary', scored: true, ready: true },
  { key: 'abstract', num: 5, name: 'General Intelligence', blurb: 'Abstract shape sequences', scored: true, ready: true },
  { key: 'attention', num: 6, name: 'Attention to Detail', blurb: 'Spot the difference, count, match', scored: true, ready: true },
  // Extra practice tile, not part of the real exam's six sections and
  // excluded from the Mixed Mock so the mock mirrors the actual paper.
  { key: 'sdt', kicker: 'Extra practice', name: 'Speed Distance Time', blurb: 'From one-step basics to closing speeds', scored: true, ready: true, mock: false },
]

export const SECTION_LABELS = Object.fromEntries(SECTIONS.map((s) => [s.key, s.name]))
SECTION_LABELS.mock = 'Mixed Mock'

// Difficulty setting -> level per question index. 'ramp' starts easy and
// gets harder as you go; fixed settings hold one level throughout.
const LEVEL_FNS = {
  easy: () => 1,
  standard: () => 2,
  hard: () => 3,
  ramp: (i) => (i < 6 ? 1 : i < 13 ? 2 : 3),
}

const builders = {
  quant: (rng, getLevel) => makeGeneratorSource(quantPool, rng, getLevel),
  logical: (rng, getLevel) => makeGeneratorSource(logicalPool, rng, getLevel),
  attention: (rng, getLevel) => makeGeneratorSource(attentionPool, rng, getLevel),
  abstract: (rng, getLevel) => makeGeneratorSource(abstractPool, rng, getLevel),
  sdt: (rng, getLevel) => makeGeneratorSource(sdtPool, rng, getLevel),
  verbal: (rng) => makeBankSource(verbalBank, rng, getVerbalCycle(), saveVerbalCycle),
}

export function buildSource(sectionKey, rng, difficulty = 'ramp') {
  const getLevel = LEVEL_FNS[difficulty] ?? LEVEL_FNS.ramp
  if (sectionKey === 'mock') {
    const parts = SECTIONS.filter((s) => s.scored && s.ready && s.mock !== false && builders[s.key]).map(
      (s) => builders[s.key](rng, getLevel),
    )
    return makeMockSource(parts, rng)
  }
  const b = builders[sectionKey]
  if (!b) throw new Error(`No source builder for section "${sectionKey}"`)
  return b(rng, getLevel)
}
