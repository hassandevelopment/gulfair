import { useEffect, useRef, useState } from 'react'
import { getSettings, saveSettings } from './storage/storage.js'
import Home from './screens/Home.jsx'
import ModeSelect from './screens/ModeSelect.jsx'
import Quiz from './screens/Quiz.jsx'
import Review from './screens/Review.jsx'
import Settings from './screens/Settings.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import PersonalityBriefing from './screens/PersonalityBriefing.jsx'
import PersonalityDrill from './screens/PersonalityDrill.jsx'
import HomeButton from './components/HomeButton.jsx'
import Stats from './screens/Stats.jsx'
import Landing from './screens/Landing.jsx'
import OralHub from './screens/OralHub.jsx'
import OralTextbook from './screens/OralTextbook.jsx'
import OralExam from './screens/OralExam.jsx'
import OralSdtDrill from './screens/OralSdtDrill.jsx'
import { recordSession } from './storage/stats.js'

// The whole app is one page; this state object is the "router".
export default function App() {
  const [settings, setSettings] = useState(getSettings)
  const [view, setView] = useState({ screen: 'landing' })

  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme === 'dark' ? 'dark' : 'light'
  }, [settings.theme])

  // Browser history integration so back gestures (mobile swipe, desktop back
  // button) walk backwards through the app's screens instead of leaving the
  // site. Every in-app navigation pushes an entry; popstate restores it.
  const fromPop = useRef(false)
  const firstRender = useRef(true)
  useEffect(() => {
    window.history.replaceState({ screen: 'landing' }, '')
    const onPop = (e) => {
      fromPop.current = true
      setView(e.state ?? { screen: 'landing' })
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    if (fromPop.current) {
      fromPop.current = false
      return
    }
    window.history.pushState(view, '')
  }, [view])

  const goHome = () => setView({ screen: 'home' })
  const goLanding = () => setView({ screen: 'landing' })
  const goOralHub = () => setView({ screen: 'oral-hub' })
  const toggleTheme = () => {
    const theme = settings.theme === 'dark' ? 'light' : 'dark'
    saveSettings({ theme })
    setSettings((s) => ({ ...s, theme }))
  }

  let screen = null
  switch (view.screen) {
    case 'landing':
      screen = <Landing onPsychometric={goHome} onOral={goOralHub} />
      break
    case 'oral-hub':
      screen = (
        <OralHub
          onTextbook={() => setView({ screen: 'oral-textbook' })}
          onExam={() => setView({ screen: 'oral-exam' })}
          onSdt={() => setView({ screen: 'oral-sdt' })}
          onBack={goLanding}
        />
      )
      break
    case 'oral-textbook':
      screen = <OralTextbook onBack={goOralHub} onHome={goLanding} />
      break
    case 'oral-exam':
      screen = <OralExam onBack={goOralHub} onHome={goLanding} />
      break
    case 'oral-sdt':
      screen = <OralSdtDrill onBack={goOralHub} onHome={goLanding} />
      break
    case 'home':
      screen = (
        <Home
          onSection={(key) =>
            setView(key === 'personality' ? { screen: 'personality' } : { screen: 'mode', sectionKey: key })
          }
          onSettings={() => setView({ screen: 'settings' })}
          onStats={() => setView({ screen: 'stats' })}
          onExit={goLanding}
        />
      )
      break
    case 'stats':
      screen = <Stats onBack={goHome} />
      break
    case 'personality':
      screen = (
        <PersonalityBriefing onStart={() => setView({ screen: 'personality-drill' })} onBack={goHome} />
      )
      break
    case 'personality-drill':
      screen = <PersonalityDrill settings={settings} onDone={goHome} />
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
          onDone={(result) => {
            recordSession(result)
            setView({ screen: 'review', result })
          }}
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
      {view.screen !== 'landing' && <HomeButton onClick={goLanding} />}
      <ThemeToggle theme={settings.theme} onToggle={toggleTheme} />
    </>
  )
}
