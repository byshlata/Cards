import { ReactNode } from 'react'

export type CustomButtonType = {
  type?: 'submit' | 'button' | 'reset'
  color: 'primary' | 'secondary' | 'link' | 'danger' | 'disabled' | 'submit'
  disabled?: boolean
  onClick?: () => void
  children?: ReactNode
}
