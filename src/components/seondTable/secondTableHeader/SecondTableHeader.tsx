import React from 'react'

import { SortParamElementType, SortParamType } from '../../../types'
import { TableHeadElementType } from '../../table/Table'
import { SecondTableCell } from '../secondTableCell/SecondTableCell'

import style from './SecondTableHeader.module.sass'

type SecondTableHeaderType = {
  header: TableHeadElementType[]
}

export const SecondTableHeader: React.FC<SecondTableHeaderType> = ({ header }) => {
  const mappedHeader = header.map(h => <SecondTableCell key={h.title} title={h.title} />)

  return <div className={style.headerWrapper}>{mappedHeader}</div>
}
