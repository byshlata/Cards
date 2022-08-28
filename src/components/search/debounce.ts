import { useEffect, useState } from 'react'

const TIME_TO_REQUEST = 350
export const useDebounce = (value: string, delay = TIME_TO_REQUEST) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}
