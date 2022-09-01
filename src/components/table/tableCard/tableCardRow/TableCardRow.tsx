import React from 'react'

import { CustomButtonBox } from 'components/button'
import { IconDeleteSvg } from 'components/iconSVG/iconDeleteSVG/IconDeleteSVG'
import { IconEditSvg } from 'components/iconSVG/iconEditSVG/IconEditSVG'
import { IconLearnSVG } from 'components/iconSVG/iconLearnSVG/IconLearnSVG'
import { TableCell } from 'components/table/component/tableCell/TableCell'
import { TablePackListAction } from 'components/table/tablePackList/tablePackListAction/TablePackListAction'
import style from 'components/table/tablePackList/tablePackListRow/TablePackListRow.module.sass'

type TableCardRowType = {
  user_id: string
  _id: string
  question: string
  answer: string
  grade: number
  updated: string
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
      <TableCell title={grade} />
      <TableCell title={grade}></TableCell>
    </div>
  )
}
