import React from 'react'

import { TableCell } from '../../component/tableCell/TableCell'

import style from './TableCardRow.module.sass'

type TableCardRowType = {
  user_id: string
  _id: string
  question: string
  answer: string
  grade: number
  updated: string
  create: string
  onClick?: (idPack: string, cardsCount: number, backValue: BackValueType) => void
}

type BackValueType = 'name' | 'edit' | 'learn' | 'delete'

export const TableCardRow = ({
  user_id,
  answer,
  question,
  updated,
  grade,
  _id,
  onClick,
}: TableCardRowType) => {
  return (
    <div className={style.rowWrapper}>
      <TableCell title={question} />
      <TableCell title={answer} />
      <TableCell title={updated} />
      <TableCell title={updated} />
      <TableCell title={grade} />
    </div>
  )
}
