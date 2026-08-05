import { loadStore, updateStore } from './storage.js'

function localDay(offsetDays = 0) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

// Called once per finished session (Set completed or Spam ended).
// Mock answers carry their own section, so they feed each section's stats;
// the history entry keeps the session label (including 'mock').
export function recordSession({ sectionKey, mode, answers }) {
  if (!answers.length) return
  const correct = answers.filter((a) => a.correct).length
  const totalMs = answers.reduce((s, a) => s + a.ms, 0)

  updateStore((s) => {
    for (const a of answers) {
      const sec = s.sections[a.section] ?? { attempts: 0, correct: 0, totalMs: 0 }
      sec.attempts += 1
      if (a.correct) sec.correct += 1
      sec.totalMs += a.ms
      s.sections[a.section] = sec

      if (a.rule) {
        const r = s.verbalRules[a.rule] ?? { attempts: 0, correct: 0 }
        r.attempts += 1
        if (a.correct) r.correct += 1
        s.verbalRules[a.rule] = r
      }
    }

    s.history.unshift({
      date: new Date().toISOString(),
      section: sectionKey,
      mode,
      score: correct,
      total: answers.length,
      avgMs: Math.round(totalMs / answers.length),
    })
    s.history = s.history.slice(0, 100)

    const today = localDay()
    if (s.streak.lastActiveDay !== today) {
      s.streak.current = s.streak.lastActiveDay === localDay(-1) ? s.streak.current + 1 : 1
      s.streak.lastActiveDay = today
      s.streak.best = Math.max(s.streak.best, s.streak.current)
    }
  })
}

export function getStats() {
  const s = loadStore()
  return { sections: s.sections, verbalRules: s.verbalRules, history: s.history, streak: s.streak }
}

// A streak only counts if it is still alive (active today or yesterday).
export function displayStreak(streak) {
  if (!streak.lastActiveDay) return 0
  if (streak.lastActiveDay === localDay() || streak.lastActiveDay === localDay(-1)) {
    return streak.current
  }
  return 0
}
