import React from 'react'

import { CustomButton, CustomButtonBox } from 'components/button'

import { TableAction } from '../tableAction/TableAction'
import { TableCell } from '../tableCell/TableCell'

import style from './TableRow.module.sass'

type TableRowType = {
  name: string
  user_id: string
  cardsCount: number
  updated: string
  user_name: string
}

export const TableRow: React.FC<TableRowType> = ({
  name,
  user_id,
  user_name,
  updated,
  cardsCount,
}) => {
  const onClick = () => {}
  return (
    <div className={style.rowWrapper}>
      <TableCell>
        <CustomButtonBox color={'link'} onClick={onClick}>
          {name}
        </CustomButtonBox>
      </TableCell>
      <TableCell title={cardsCount} />
      <TableCell title={updated} />
      <TableCell title={user_name} />
      <TableAction user_id={user_id} />
    </div>
  )
}
