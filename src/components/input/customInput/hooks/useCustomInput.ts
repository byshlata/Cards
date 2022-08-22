import { useState } from 'react'

type useCustomInputReturnType = {
  value: string
  setValue: (value: any) => void
}

export const useCustomInput = (initialValue: string): useCustomInputReturnType => {
  const [value, setValue] = useState(initialValue)

  return { value, setValue }
}
