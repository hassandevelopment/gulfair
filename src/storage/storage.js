// All localStorage access goes through here. Every call is wrapped so quota
// errors or private-mode restrictions degrade to in-memory defaults silently.

const KEY = 'psych-drill:v1'

function defaults() {
  return {
    version: 1,
    settings: {
      perQuestionSeconds: 45,
      setLength: 20,
      personalityLength: 30,
      difficulty: 'ramp',
      feedbackMode: 'immediate',
      theme: 'light',
    },
    streak: { current: 0, best: 0, lastActiveDay: null },
    sections: {},
    verbalRules: {},
    history: [],
    verbalCycle: null,
  }
}

let memoryFallback = null

export function loadStore() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return memoryFallback ?? defaults()
    const parsed = JSON.parse(raw)
    return { ...defaults(), ...parsed, settings: { ...defaults().settings, ...parsed.settings } }
  } catch {
    return memoryFallback ?? defaults()
  }
}

export function updateStore(mutate) {
  const store = loadStore()
  mutate(store)
  try {
    localStorage.setItem(KEY, JSON.stringify(store))
  } catch {
    memoryFallback = store
  }
  return store
}

export function getSettings() {
  return loadStore().settings
}

export function saveSettings(settings) {
  updateStore((s) => {
    s.settings = { ...s.settings, ...settings }
  })
}

export function getVerbalCycle() {
  return loadStore().verbalCycle
}

export function saveVerbalCycle(cycle) {
  updateStore((s) => {
    s.verbalCycle = cycle
  })
}
