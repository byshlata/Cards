import { ChangeEvent, useState } from 'react'

type useCustomInputReturnType = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useCustomInput = (initialValue = ''): useCustomInputReturnType => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return { value, onChange }
}
