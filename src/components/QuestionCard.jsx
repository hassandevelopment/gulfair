// Renders the prompt. Short arithmetic gets huge crisp numerals; word problems
// and verbal items get comfortable reading type.
const BIG_TYPES = new Set(['percent', 'tables', 'division', 'orderOfOps'])

export default function QuestionCard({ question }) {
  const big = question.section === 'quant' && BIG_TYPES.has(question.type) && question.prompt.length <= 26

  if (big) {
    return (
      <div className="py-10 md:py-14 text-center">
        <p className="font-bold text-5xl md:text-7xl tracking-tight tabular-nums text-ink">
          {question.prompt}
        </p>
      </div>
    )
  }
  return (
    <div className="py-8 md:py-10">
      <p className="text-xl md:text-2xl leading-relaxed font-medium text-ink max-w-2xl">
        {question.prompt}
      </p>
    </div>
  )
}
