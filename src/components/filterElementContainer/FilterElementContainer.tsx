import React from 'react'

import { FilterElementType } from 'types'

import style from './FilterElementContainer.module.sass'
import {useAppDispatch} from "../../hooks";
import {removePackParams} from "../../store";

export const FilterElementContainer = ({ element, title }: FilterElementType) => {
    const dispatch = useAppDispatch()
    const clearFilter = () =>{
        dispatch(removePackParams())
    }

  return (
    <div className={style.filterElementWrapper} onClick={clearFilter}>
      <h3 className={style.title}>{title}</h3>
      {element}
    </div>
  )
}
