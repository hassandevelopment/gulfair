import { useEffect, useRef, useState } from 'react'

// Deadline-based countdown so it never drifts. Resets whenever resetKey
// changes; pauses (and cannot fire) when running is false.
export function useCountdown(seconds, { running, onExpire, resetKey }) {
  const [remaining, setRemaining] = useState(seconds)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire

  useEffect(() => {
    setRemaining(seconds)
    if (!running) return undefined
    const deadline = Date.now() + seconds * 1000
    const id = setInterval(() => {
      const left = (deadline - Date.now()) / 1000
      if (left <= 0) {
        clearInterval(id)
        setRemaining(0)
        onExpireRef.current?.()
      } else {
        setRemaining(left)
      }
    }, 100)
    return () => clearInterval(id)
  }, [seconds, running, resetKey])

  return { remaining, fraction: Math.max(0, remaining / seconds) }
}
