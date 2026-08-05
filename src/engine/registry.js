import { quantPool } from '../generators/quant/index.js'
import { verbalBank } from '../data/verbalBank.js'
import { makeGeneratorSource, makeBankSource, makeMockSource } from './sources.js'
import { getVerbalCycle, saveVerbalCycle } from '../storage/storage.js'

// Section metadata drives the home screen. Order matches the real exam.
export const SECTIONS = [
  { key: 'personality', num: 1, name: 'Personality Profiler', blurb: 'Likert statements, unscored', scored: false, ready: false },
  { key: 'quant', num: 2, name: 'Quantitative Aptitude', blurb: 'Percentages, tables, speed and distance', scored: true, ready: true },
  { key: 'logical', num: 3, name: 'Logical Reasoning', blurb: 'Series, alphabetizing, odd one out', scored: true, ready: false },
  { key: 'verbal', num: 4, name: 'Verbal Ability', blurb: 'Grammar, confusables, vocabulary', scored: true, ready: true },
  { key: 'abstract', num: 5, name: 'General Intelligence', blurb: 'Abstract shape sequences', scored: true, ready: false },
  { key: 'attention', num: 6, name: 'Attention to Detail', blurb: 'Spot the difference, count, match', scored: true, ready: false },
]

export const SECTION_LABELS = Object.fromEntries(SECTIONS.map((s) => [s.key, s.name]))
SECTION_LABELS.mock = 'Mixed Mock'

const builders = {
  quant: (rng) => makeGeneratorSource(quantPool, rng),
  verbal: (rng) => makeBankSource(verbalBank, rng, getVerbalCycle(), saveVerbalCycle),
}

export function buildSource(sectionKey, rng) {
  if (sectionKey === 'mock') {
    const parts = SECTIONS.filter((s) => s.scored && s.ready && builders[s.key]).map((s) =>
      builders[s.key](rng),
    )
    return makeMockSource(parts, rng)
  }
  const b = builders[sectionKey]
  if (!b) throw new Error(`No source builder for section "${sectionKey}"`)
  return b(rng)
}
