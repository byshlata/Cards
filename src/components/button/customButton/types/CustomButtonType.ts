import { ReactNode } from 'react'

export type CustomButtonType = {
  type: 'primary' | 'secondary' | 'link' | 'danger' | 'disabled'
  disabled: boolean
  onClick: () => void
  children?: ReactNode
}
