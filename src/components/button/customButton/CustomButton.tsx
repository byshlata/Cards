import React, { FC, ReactElement } from 'react'

import style from './CustomrButton.module.sass'
import { CustomButtonType } from './types/CustomButtonType'

export const CustomButton: FC<CustomButtonType> = (props): ReactElement => {
  const { disabled, onClick, type, children } = props

  let buttonClassName

  if (type === 'primary') {
    buttonClassName = style.primaryButton
  }

  if (type === 'secondary') {
    buttonClassName = style.secondaryButton
  }

  if (type === 'danger') {
    buttonClassName = style.dangerButton
  }

  if (type === 'disabled') {
    buttonClassName = style.disabledButton
  }

  if (type === 'link') {
    buttonClassName = style.linkButton
  }

  return (
    <button
      type="button"
      disabled={disabled}
      aria-label="open"
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
