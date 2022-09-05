import React, { ReactNode } from 'react'

import { TableHeadElementType } from '../table/Table'

import style from './SecondTable.module.sass'
import { SecondTableHeader } from './secondTableHeader/SecondTableHeader'
import { SecondTableRow, SecondTableRowType } from './secondTableRow/SecondTableRow'

// {/*  {children}*/}
// {/*</SecondTableRow>*/}

type SecondTableType = {
  header: TableHeadElementType[]
  body: SecondTableRowType[]
  children?: ReactNode
}

export const SecondTable: React.FC<SecondTableType> = ({ header, body, children }) => {
  const START_FORMAT_DATE = 0
  const END_FORMAT_DATE = 10
  const formattedDate = (data: string | undefined) => {
    return data?.slice(START_FORMAT_DATE, END_FORMAT_DATE).split('-').reverse().join('.')
  }
  const mappedPacks = body.map(b => (
    <SecondTableRow
      key={b._id}
      _id={b._id}
      name={b.name}
      cardsCount={b.cardsCount}
      user_id={b.user_id}
      user_name={b.user_name}
      updated={formattedDate(b.updated)}
    >
      {children}
    </SecondTableRow>
  ))

  return (
    <div className={style.tableWrapper}>
      <SecondTableHeader header={header} />
      {mappedPacks}
    </div>
  )
}
