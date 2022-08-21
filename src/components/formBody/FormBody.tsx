import React from 'react'

import s from './FormBody.module.sass'
import { FormBodyType } from './type/FormBodyType'

export const FormBody: React.FC<FormBodyType> = (props) => {
  const { height, width, children } = props

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }} className={s.formBody}>
      {children}
    </div>
  )
}
