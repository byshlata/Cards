import React, { ReactNode } from 'react'

import { SecondTableCell } from '../secondTableCell/SecondTableCell'

import style from './SecondTableRow.module.sass'

export type SecondTableRowType = {
  name?: string
  user_id?: string
  cardsCount?: number
  updated?: string
  user_name?: string
  _id?: string
  children?: ReactNode
  //extra: number
}

export const SecondTableRow: React.FC<SecondTableRowType> = ({
  name,
  user_name,
  updated,
  cardsCount,
  user_id,
  _id,
  children,
}) => {
  return (
    <div className={style.rowWrapper}>
      <SecondTableCell title={name} />
      <SecondTableCell title={cardsCount} />
      <SecondTableCell title={updated} />
      <SecondTableCell title={user_name} />
      {children}
    </div>
  )
}
