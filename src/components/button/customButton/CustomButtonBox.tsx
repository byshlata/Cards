import React, { FC, ReactElement } from 'react'

import style from './CustomrButtonBoxStyle.module.sass'
import { useStyleCustomButton } from './hooks/useStyleCustomButton'
import { CustomButtonBoxType } from './types/CustomButtonBoxType'

export const CustomButtonBox: FC<CustomButtonBoxType> = React.memo((props): ReactElement => {
  let { disabled, onClick, color, type, children, borderRadius } = props
  const buttonClassName = useStyleCustomButton(color, disabled, style)

  return (
    <button
      style={{ borderRadius: `${borderRadius}` }}
      type={type}
      disabled={disabled}
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  )
})
