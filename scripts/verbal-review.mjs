// Regenerates VERBAL_REVIEW.md from the verbal bank so the audit file can
// never drift from the data. Run: npm run verbal-review
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { verbalBank, VERBAL_RULES, RULE_LABELS } from '../src/data/verbalBank.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const lines = []
lines.push('# Verbal Bank Review')
lines.push('')
lines.push(`Generated from \`src/data/verbalBank.js\` (${verbalBank.length} items). Do not edit by hand; run \`npm run verbal-review\` after changing the bank.`)
lines.push('')
lines.push('Every item below shows the question, the four options, the marked answer, and the rule that justifies it. The marked answer is computed from the answer string in the data file, so it cannot be out of sync with the app.')
lines.push('')

let n = 0
for (const rule of VERBAL_RULES) {
  const items = verbalBank.filter((q) => q.rule === rule)
  lines.push(`## ${RULE_LABELS[rule]} (${items.length} items)`)
  lines.push('')
  for (const q of items) {
    n += 1
    lines.push(`**${n}. ${q.prompt}**`)
    lines.push('')
    q.options.forEach((opt, i) => {
      lines.push(`- ${i === q.correctIndex ? '**' + opt + '** <- marked answer' : opt}`)
    })
    lines.push('')
    lines.push(`Why: ${q.explanation}`)
    lines.push('')
  }
}

const missed = verbalBank.filter((q) => !VERBAL_RULES.includes(q.rule))
if (missed.length) {
  throw new Error(`Items with unknown rule tags: ${missed.map((q) => q.prompt).join('; ')}`)
}
if (verbalBank.length < 150) {
  throw new Error(`Bank has ${verbalBank.length} items; minimum is 150.`)
}

writeFileSync(join(root, 'VERBAL_REVIEW.md'), lines.join('\n'))
console.log(`VERBAL_REVIEW.md written: ${verbalBank.length} items across ${VERBAL_RULES.length} rules.`)
