import React from 'react'

import { FilterElementType } from 'types'

import style from './FilterElementContainer.module.sass'

export const FilterElementContainer = ({ title, children }: FilterElementType) => {
  return (
    <div className={style.filterElementWrapper}>
      <h3 className={style.title}>{title}</h3>
      {children}
    </div>
  )
}
