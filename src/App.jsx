import { useState } from 'react'
import { getSettings } from './storage/storage.js'
import Home from './screens/Home.jsx'
import ModeSelect from './screens/ModeSelect.jsx'
import Quiz from './screens/Quiz.jsx'
import Review from './screens/Review.jsx'
import Settings from './screens/Settings.jsx'

// The whole app is one page; this state object is the "router".
export default function App() {
  const [settings, setSettings] = useState(getSettings)
  const [view, setView] = useState({ screen: 'home' })

  const goHome = () => setView({ screen: 'home' })

  switch (view.screen) {
    case 'home':
      return (
        <Home
          onSection={(key) => setView({ screen: 'mode', sectionKey: key })}
          onSettings={() => setView({ screen: 'settings' })}
        />
      )
    case 'settings':
      return <Settings settings={settings} onChange={setSettings} onBack={goHome} />
    case 'mode':
      return (
        <ModeSelect
          sectionKey={view.sectionKey}
          settings={settings}
          onMode={(mode) => setView({ screen: 'quiz', sectionKey: view.sectionKey, mode, run: Date.now() })}
          onBack={goHome}
        />
      )
    case 'quiz':
      return (
        <Quiz
          key={view.run}
          sectionKey={view.sectionKey}
          mode={view.mode}
          settings={settings}
          onDone={(result) => setView({ screen: 'review', result })}
          onExit={goHome}
        />
      )
    case 'review':
      return (
        <Review
          result={view.result}
          onHome={goHome}
          onRetry={() =>
            setView({
              screen: 'quiz',
              sectionKey: view.result.sectionKey,
              mode: view.result.mode,
              run: Date.now(),
            })
          }
        />
      )
    default:
      return null
  }
}
