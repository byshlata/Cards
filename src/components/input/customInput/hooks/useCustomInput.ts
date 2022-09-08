import { ChangeEvent, useEffect, useState } from 'react'

type useCustomInputReturnType = [
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  resetInput: () => void
]

export const useCustomInput = (initialValue = ''): useCustomInputReturnType => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const resetInput = () => {
    setValue('')
  }

  return [value, onChange, resetInput]
}
