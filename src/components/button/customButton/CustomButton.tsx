import React, { FC, ReactElement } from 'react'

import { useStyleCustomButton } from 'components/button/customButton/hooks/useStyleCustomButton'

import { CustomButtonType } from './types/CustomButtonType'

export const CustomButton: FC<CustomButtonType> = React.memo((props): ReactElement => {
  const { disabled, onClick, color, type, children } = props
  const buttonClassName = useStyleCustomButton(color, disabled)
  return (
    <button type={type} disabled={disabled} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  )
})
