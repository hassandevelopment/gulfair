import SvgFigure from './SvgFigure.jsx'

// Renders the prompt. Short arithmetic gets huge crisp numerals, abstract
// questions get the shape sequence, everything else gets reading type.
const BIG_TYPES = new Set(['percent', 'tables', 'division', 'orderOfOps'])

export default function QuestionCard({ question }) {
  if (question.figure) {
    return (
      <div className="py-8 md:py-10">
        <p className="text-xl md:text-2xl font-medium text-ink">{question.prompt}</p>
        <div className="mt-6 flex items-center gap-3 md:gap-4">
          {question.figure.cells.map((spec, i) => (
            <div
              key={i}
              className="w-20 h-20 md:w-28 md:h-28 rounded-xl hairline bg-surface card-shadow flex items-center justify-center"
            >
              <SvgFigure spec={spec} size={72} />
            </div>
          ))}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl border-2 border-dashed border-dim/50 bg-surface/50 flex items-center justify-center">
            <span className="text-3xl font-bold text-dim">?</span>
          </div>
        </div>
      </div>
    )
  }

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
