import { useEffect, useRef } from 'react'

// One window listener; handlers live in a ref so we subscribe exactly once.
// Keys 1-4 select an option, Enter continues, Escape backs out.
export function useKeyboard(handlers) {
  const ref = useRef(handlers)
  ref.current = handlers

  useEffect(() => {
    function onKeyDown(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (e.key >= '1' && e.key <= '9') {
        ref.current.onDigit?.(Number(e.key) - 1)
      } else if (e.key === 'Enter') {
        ref.current.onEnter?.()
      } else if (e.key === 'Escape') {
        ref.current.onEscape?.()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
}
