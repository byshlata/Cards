import { ChangeEvent } from 'react'

export type CustomInputType = {
  name?: string
  type: InputType
  error?: string
  className?: string
  disabled?: boolean
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
}

export type InputType = 'search' | 'password' | 'simple' | 'checkbox'
