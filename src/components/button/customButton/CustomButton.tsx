import React, { FC, ReactElement, memo } from 'react'

import style from './CustomrButtonRadiusStyle.module.sass'
import { useStyleCustomButton } from './hooks/useStyleCustomButton'
import { CustomButtonType } from './types/CustomButtonType'

export const CustomButton: FC<CustomButtonType> = memo((props): ReactElement => {
  let { disabled, onClick, color, type, children } = props
  const buttonClassName = useStyleCustomButton(color, disabled, style)

  return (
    <button type={type} disabled={disabled} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  )
})
