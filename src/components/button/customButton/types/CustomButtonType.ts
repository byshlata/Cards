import { ReactNode } from 'react'

import { ColorCustomButtonType } from 'components/button/customButton/type/ColorCustomButtonType'

export type CustomButtonType = {
  type?: 'submit' | 'button' | 'reset'
  color: ColorCustomButtonType
  disabled?: boolean
  onClick?: () => void
  children?: ReactNode
}
