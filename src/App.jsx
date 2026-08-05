import { useEffect, useState } from 'react'
import { getSettings, saveSettings } from './storage/storage.js'
import Home from './screens/Home.jsx'
import ModeSelect from './screens/ModeSelect.jsx'
import Quiz from './screens/Quiz.jsx'
import Review from './screens/Review.jsx'
import Settings from './screens/Settings.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

// The whole app is one page; this state object is the "router".
export default function App() {
  const [settings, setSettings] = useState(getSettings)
  const [view, setView] = useState({ screen: 'home' })

  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme === 'dark' ? 'dark' : 'light'
  }, [settings.theme])

  const goHome = () => setView({ screen: 'home' })
  const toggleTheme = () => {
    const theme = settings.theme === 'dark' ? 'light' : 'dark'
    saveSettings({ theme })
    setSettings((s) => ({ ...s, theme }))
  }

  let screen = null
  switch (view.screen) {
    case 'home':
      screen = (
        <Home
          onSection={(key) => setView({ screen: 'mode', sectionKey: key })}
          onSettings={() => setView({ screen: 'settings' })}
        />
      )
      break
    case 'settings':
      screen = <Settings settings={settings} onChange={setSettings} onBack={goHome} />
      break
    case 'mode':
      screen = (
        <ModeSelect
          sectionKey={view.sectionKey}
          settings={settings}
          onMode={(mode) => setView({ screen: 'quiz', sectionKey: view.sectionKey, mode, run: Date.now() })}
          onBack={goHome}
        />
      )
      break
    case 'quiz':
      screen = (
        <Quiz
          key={view.run}
          sectionKey={view.sectionKey}
          mode={view.mode}
          settings={settings}
          onDone={(result) => setView({ screen: 'review', result })}
          onExit={goHome}
        />
      )
      break
    case 'review':
      screen = (
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
      break
    default:
      screen = null
  }

  return (
    <>
      {screen}
      <ThemeToggle theme={settings.theme} onToggle={toggleTheme} />
    </>
  )
}
