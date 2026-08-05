import { getStats, displayStreak } from '../storage/stats.js'
import { SECTIONS, SECTION_LABELS } from '../engine/registry.js'
import { RULE_LABELS } from '../data/verbalBank.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import Btn from '../components/Btn.jsx'

const pct = (correct, attempts) => (attempts ? Math.round((correct / attempts) * 100) : 0)
const accColor = (p) => (p >= 80 ? 'text-good' : p >= 50 ? 'text-accent' : 'text-bad')

export default function Stats({ onBack }) {
  const { sections, verbalRules, history, streak } = getStats()
  const live = displayStreak(streak)

  useKeyboard({ onEscape: onBack })

  const sectionRows = SECTIONS.filter((s) => s.scored)
    .map((s) => ({ key: s.key, name: s.name, ...(sections[s.key] ?? { attempts: 0, correct: 0, totalMs: 0 }) }))

  const ruleRows = Object.entries(verbalRules)
    .map(([rule, r]) => ({ rule, ...r, acc: pct(r.correct, r.attempts) }))
    .sort((a, b) => a.acc - b.acc)

  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12">
        <Btn onClick={onBack} kbd="Esc">
          Back
        </Btn>

        <div className="mt-8 flex items-end justify-between animate-fade-up">
          <h2 className="text-3xl font-semibold tracking-tight">Stats</h2>
          <div className="text-right">
            <p className="text-3xl font-bold tabular-nums text-accent">{live}</p>
            <p className="text-sm text-mut">
              day streak{streak.best > 0 ? ` / best ${streak.best}` : ''}
            </p>
          </div>
        </div>

        <section className="mt-8 rounded-2xl hairline bg-surface card-shadow overflow-x-auto animate-fade-up">
          <table className="w-full min-w-[480px] text-[15px]">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-[0.08em] text-dim border-b border-line">
                <th className="px-5 py-3 font-semibold">Section</th>
                <th className="px-3 py-3 font-semibold text-right">Answered</th>
                <th className="px-3 py-3 font-semibold text-right">Accuracy</th>
                <th className="px-5 py-3 font-semibold text-right">Avg time</th>
              </tr>
            </thead>
            <tbody>
              {sectionRows.map((r) => {
                const p = pct(r.correct, r.attempts)
                return (
                  <tr key={r.key} className="border-b border-line last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{r.name}</td>
                    <td className="px-3 py-3.5 text-right tabular-nums text-mut">{r.attempts}</td>
                    <td className={`px-3 py-3.5 text-right tabular-nums font-semibold ${r.attempts ? accColor(p) : 'text-dim'}`}>
                      {r.attempts ? `${p}%` : '-'}
                    </td>
                    <td className="px-5 py-3.5 text-right tabular-nums text-mut">
                      {r.attempts ? `${(r.totalMs / r.attempts / 1000).toFixed(1)}s` : '-'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>

        <section className="mt-8 animate-fade-up">
          <h3 className="text-lg font-semibold">Verbal rules, weakest first</h3>
          {ruleRows.length === 0 ? (
            <p className="mt-2 text-sm text-mut">Answer some verbal questions and your per-rule accuracy shows up here.</p>
          ) : (
            <ul className="mt-3 rounded-2xl hairline bg-surface card-shadow overflow-hidden">
              {ruleRows.map((r) => (
                <li key={r.rule} className="flex items-center justify-between px-5 py-3 border-b border-line last:border-0">
                  <span className="font-medium text-ink">{RULE_LABELS[r.rule] ?? r.rule}</span>
                  <span className="flex items-baseline gap-3 tabular-nums">
                    <span className="text-sm text-mut">
                      {r.correct}/{r.attempts}
                    </span>
                    <span className={`font-semibold ${accColor(r.acc)}`}>{r.acc}%</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-8 animate-fade-up">
          <h3 className="text-lg font-semibold">Recent sessions</h3>
          {history.length === 0 ? (
            <p className="mt-2 text-sm text-mut">No sessions yet.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {history.slice(0, 15).map((h, i) => {
                const p = pct(h.score, h.total)
                const d = new Date(h.date)
                return (
                  <li key={h.date + i} className="flex items-center justify-between rounded-xl hairline bg-surface px-4 py-3 text-sm">
                    <span className="text-mut">
                      {d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}{' '}
                      {d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                      <span className="mx-2 text-dim">/</span>
                      <span className="text-ink font-medium">{SECTION_LABELS[h.section] ?? h.section}</span>
                      <span className="mx-2 text-dim">/</span>
                      {h.mode === 'set' ? 'Set' : 'Spam'}
                    </span>
                    <span className="flex items-baseline gap-3 tabular-nums">
                      <span className="text-mut">
                        {h.score}/{h.total}
                      </span>
                      <span className={`font-semibold ${accColor(p)}`}>{p}%</span>
                      <span className="text-dim">{(h.avgMs / 1000).toFixed(1)}s</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
