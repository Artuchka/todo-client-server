import { useState, useEffect } from "react"

export const useThrottle = <T>(value: T, delay: number): T => {
  const [ throttledValue, setThrottledValue ] = useState(value)
  const [ lastValue, setLastValue ] = useState(value)

  useEffect(() => {
    if (value !== lastValue) {
      const timer = setTimeout(() => {
        setThrottledValue(value)
        setLastValue(value)
      }, delay)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [ value, lastValue, delay ])

  return throttledValue
}

