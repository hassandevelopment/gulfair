import { useState } from 'react'
import { saveSettings } from '../storage/storage.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import Btn from '../components/Btn.jsx'

function Row({ label, hint, children }) {
  return (
    <div className="flex items-center justify-between gap-6 py-5 border-b border-line last:border-0">
      <div>
        <p className="text-ink font-medium">{label}</p>
        <p className="text-sm text-mut mt-0.5">{hint}</p>
      </div>
      {children}
    </div>
  )
}

export default function Settings({ settings, onChange, onBack }) {
  const [local, setLocal] = useState(settings)

  function update(patch) {
    const next = { ...local, ...patch }
    setLocal(next)
    saveSettings(next)
    onChange(next)
  }

  useKeyboard({ onEscape: onBack })

  const secondsChoices = [30, 45, 60, 90]
  const lengthChoices = [10, 15, 20]

  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-12">
        <Btn onClick={onBack} kbd="Esc">
          Back
        </Btn>
        <h2 className="mt-8 text-3xl font-semibold tracking-tight animate-fade-up">Settings</h2>

        <div className="mt-8 rounded-2xl hairline bg-surface px-6 animate-fade-up">
          <Row label="Seconds per question" hint="The countdown ring on every question">
            <div className="flex gap-1.5">
              {secondsChoices.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => update({ perQuestionSeconds: s })}
                  className={`!px-3.5 !py-1.5 !text-sm tabular-nums ${
                    local.perQuestionSeconds === s ? 'btn-primary' : 'btn-glass'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </Row>
          <Row label="Set length" hint="Questions per fixed set">
            <div className="flex gap-1.5">
              {lengthChoices.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => update({ setLength: n })}
                  className={`!px-3.5 !py-1.5 !text-sm tabular-nums ${
                    local.setLength === n ? 'btn-primary' : 'btn-glass'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </Row>
          <Row label="Feedback" hint="See results per question, or only in the end review">
            <div className="flex gap-1.5">
              {[
                { v: 'immediate', label: 'Immediate' },
                { v: 'end', label: 'At end' },
              ].map(({ v, label }) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => update({ feedbackMode: v })}
                  className={`!px-3.5 !py-1.5 !text-sm ${
                    local.feedbackMode === v ? 'btn-primary' : 'btn-glass'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </Row>
        </div>
        <p className="mt-4 text-sm text-dim">
          Spam mode always shows immediate feedback; its live accuracy needs it.
        </p>
      </div>
    </div>
  )
}
