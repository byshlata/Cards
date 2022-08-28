import { ChangeEvent, useState } from 'react'

export const useInput = (initialValue = ''): UseInputType => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return {
    value,
    onChange,
  }
}

type UseInputType = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
