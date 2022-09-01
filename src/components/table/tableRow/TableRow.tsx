import React from 'react'

import { CustomButton, CustomButtonBox } from 'components/button'

import { TableAction } from '../tableAction/TableAction'
import { TableCell } from '../tableCell/TableCell'

import style from './TableRow.module.sass'

type TableSimpleRowType = {
  name: string
  pack_id: string
  user_id: string
  cardsCount: number
  updated: string
  user_name: string
}

export const TableRow = ({
  name,
  user_id,
  pack_id,
  user_name,
  updated,
  cardsCount,
}: TableSimpleRowType) => {
  const onClickNameHandle = () => {}
  const onClickTeachAction = () => {}
  const onClickDeleteAction = () => {}
  const onClickEditAction = () => {}

  return (
    <div className={style.rowWrapper}>
      <TableCell>
        <CustomButtonBox color={'link'} onClick={onClickNameHandle}>
          {name}
        </CustomButtonBox>
      </TableCell>
      <TableCell title={cardsCount} />
      <TableCell title={updated} />
      <TableCell title={user_name} />
      <TableAction
        onClickDeleteAction={onClickDeleteAction}
        onClickEditAction={onClickEditAction}
        onClickLearnAction={onClickTeachAction}
        user_id={user_id}
      />
    </div>
  )
}
