import React, { FC, ReactElement } from 'react'

import s from './CustomrButton.module.sass'
import { CustomButtonType } from './type/CustomButtonType'

export const CustomButton: FC<CustomButtonType> = (props): ReactElement => {
  const { disabled, onClick, type, children } = props

  let buttonClassName

  if (type === 'primary') {
    buttonClassName = s.primaryButton
  }

  if (type === 'secondary') {
    buttonClassName = s.secondaryButton
  }

  if (type === 'danger') {
    buttonClassName = s.dangerButton
  }

  if (type === 'disabled') {
    buttonClassName = s.disabledButton
  }

  if (type === 'link') {
    buttonClassName = s.linkButton
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
