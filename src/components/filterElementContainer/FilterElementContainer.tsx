import React from 'react'

import style from './FilterElementContainer.module.sass'

import { FilterElementType } from 'types'

export const FilterElementContainer = ({ element, title }: FilterElementType) => {
  return (
    <div className={style.filterElementWrapper}>
      <h3 className={style.title}>{title}</h3>
      {element}
    </div>
  )
}
