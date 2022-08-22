import React, { FC, ReactElement } from 'react'

import style from './CustomrButton.module.sass'
import { CustomButtonType } from './types/CustomButtonType'

export const CustomButton: FC<CustomButtonType> = (props): ReactElement => {
  const { disabled, onClick, color, type, children } = props

  let buttonClassName

  if (color === 'primary') {
    buttonClassName = style.primaryButton
  }

  if (color === 'secondary') {
    buttonClassName = style.secondaryButton
  }

  if (color === 'danger') {
    buttonClassName = style.dangerButton
  }

  if (color === 'disabled') {
    buttonClassName = style.disabledButton
  }

  if (color === 'link') {
    buttonClassName = style.linkButton
  }

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label="open"
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
