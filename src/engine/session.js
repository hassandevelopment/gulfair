// Pure session reducer. Phases: answering -> feedback -> answering ... -> done.
// In feedbackMode 'end' the feedback phase is skipped for Set mode; Spam mode
// always shows immediate feedback.

export function initSession({ questions, mode, feedbackMode }) {
  return {
    mode, // 'set' | 'spam'
    feedbackMode, // 'immediate' | 'end'
    phase: 'answering',
    index: 0,
    questions, // set: fixed array; spam: grows lazily
    answers: [], // { questionId, picked, correct, ms, timedOut }
  }
}

export function currentQuestion(state) {
  return state.questions[state.index]
}

export function sessionReducer(state, action) {
  switch (action.type) {
    case 'ANSWER': {
      if (state.phase !== 'answering') return state
      const q = currentQuestion(state)
      const record = {
        questionId: q.id,
        section: q.section,
        qType: q.type,
        rule: q.rule ?? null,
        picked: action.picked, // -1 for timeout
        correct: action.picked === q.correctIndex,
        ms: action.ms,
        timedOut: action.picked === -1,
      }
      const answers = [...state.answers, record]
      const showFeedback = state.mode === 'spam' || state.feedbackMode === 'immediate'
      if (showFeedback) return { ...state, answers, phase: 'feedback' }
      return advance({ ...state, answers })
    }
    case 'NEXT': {
      if (state.phase !== 'feedback') return state
      return advance(state)
    }
    case 'APPEND_QUESTION': {
      return { ...state, questions: [...state.questions, action.question] }
    }
    case 'FINISH':
      return { ...state, phase: 'done' }
    default:
      return state
  }
}

function advance(state) {
  const nextIndex = state.index + 1
  if (state.mode === 'set' && nextIndex >= state.questions.length) {
    return { ...state, phase: 'done' }
  }
  return { ...state, index: nextIndex, phase: 'answering' }
}

export function sessionStats(state) {
  const n = state.answers.length
  const correct = state.answers.filter((a) => a.correct).length
  const totalMs = state.answers.reduce((s, a) => s + a.ms, 0)
  return {
    answered: n,
    correct,
    accuracy: n ? Math.round((correct / n) * 100) : 0,
    avgMs: n ? Math.round(totalMs / n) : 0,
  }
}
