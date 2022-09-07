import React from 'react'

import style from './FormBody.module.sass'
import { FormBodyType } from './types/FormBodyType'

export const FormBody: React.FC<FormBodyType> = props => {
  const { height, width, children } = props

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px`, margin: '0 auto' }}
      className={style.formBody}
    >
      {children}
    </div>
  )
}
