// Regenerates ORAL_REVIEW.md from the oral bank so the audit file can never
// drift from the data. Run: npm run oral-review
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import {
  oralBank,
  isComplete,
  ORAL_CATEGORIES,
  CATEGORY_LABELS,
  FREQ_LABELS,
  FREQ_DETAIL,
} from '../src/data/oralBank.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

// Hard failures first: a half-written entry must never slip past review.
for (const q of oralBank) {
  const hasAny = q.conceptExplanation || q.spokenVersion || q.mcq || q.flashcardAnswer
  if (hasAny && !isComplete(q)) {
    throw new Error(`Half-complete entry ${q.id}: write all four content fields or none.`)
  }
}
if (oralBank.length < 95) {
  throw new Error(`Bank has ${oralBank.length} questions; minimum is 95.`)
}

const complete = oralBank.filter(isComplete)

const lines = []
lines.push('# Oral Interview Bank Review')
lines.push('')
lines.push(`Generated from \`src/data/oralBank.js\` (${oralBank.length} questions, ${complete.length} with written answers). Do not edit by hand; run \`npm run oral-review\` after changing the bank.`)
lines.push('')
lines.push('IMPORTANT: the answers below are unverified aviation theory written for study purposes. Some may be wrong or imprecise. Every answer must be checked by a qualified captain before it is trusted. Please mark anything incorrect, imprecise, or oddly phrased.')
lines.push('')
lines.push('Each written entry shows the question, the concept explanation, the spoken answer skeleton, the multiple choice options with the marked answer, and the short flashcard answer. Entries marked PENDING have no answer content yet.')
lines.push('')

let n = 0
for (const freq of [5, 4, 3, 2, 1]) {
  const tier = oralBank.filter((q) => q.frequency === freq)
  if (!tier.length) continue
  const written = tier.filter(isComplete).length
  lines.push(`## Frequency ${freq}: ${FREQ_LABELS[freq]} (${tier.length} questions, ${written} written)`)
  lines.push('')
  lines.push(`${FREQ_DETAIL[freq]}.`)
  lines.push('')
  for (const category of ORAL_CATEGORIES) {
    const items = tier.filter((q) => q.category === category)
    for (const q of items) {
      n += 1
      lines.push(`**${n}. ${q.question}** \`${CATEGORY_LABELS[q.category]}\` \`${q.id}\``)
      lines.push('')
      if (!isComplete(q)) {
        lines.push('PENDING: answer not yet written.')
        lines.push('')
        continue
      }
      lines.push(q.conceptExplanation)
      lines.push('')
      lines.push('Spoken answer skeleton:')
      lines.push('')
      for (const bullet of q.spokenVersion) lines.push(`- ${bullet}`)
      lines.push('')
      lines.push('Multiple choice:')
      lines.push('')
      q.mcq.options.forEach((opt, i) => {
        lines.push(`- ${i === q.mcq.correctIndex ? '**' + opt + '** <- marked answer' : opt}`)
      })
      lines.push('')
      lines.push(`Flashcard answer: ${q.flashcardAnswer}`)
      lines.push('')
    }
  }
}

const text = lines.join('\n')
if (text.includes('—')) throw new Error('Em-dash found in generated review file.')

writeFileSync(join(root, 'ORAL_REVIEW.md'), text)
console.log(`ORAL_REVIEW.md written: ${oralBank.length} questions, ${complete.length} with answers.`)
