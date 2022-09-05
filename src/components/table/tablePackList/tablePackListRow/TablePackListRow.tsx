import React from 'react'

import { CustomButtonBox, IconDeleteSvg, IconEditSvg, IconLearnSVG } from 'components'
import { TableCell } from 'components/table/component/tableCell/TableCell'
import { TablePackListAction } from 'components/table/tablePackList/tablePackListAction/TablePackListAction'
import { BackValueType } from 'types'

import style from './TablePackListRow.module.sass'

type TableSimpleRowType = {
  name: string
  pack_id: string
  authUser_id: string
  user_id: string
  cardsCount: number
  updated: string
  user_name: string
  onClickAction: (
    idPack: string,
    cardsCount: number,
    backValue: BackValueType,
    name?: string
  ) => void
}

export const TablePackListRow = ({
  authUser_id,
  name,
  user_id,
  pack_id,
  user_name,
  updated,
  cardsCount,
  onClickAction,
}: TableSimpleRowType) => {
  const onClickActionHandle = (backValue: BackValueType) => {
    if (backValue !== 'edit') {
      onClickAction(pack_id, cardsCount, backValue)
    } else {
      onClickAction(pack_id, cardsCount, backValue, name)
    }
  }

  return (
    <div className={style.rowWrapper}>
      <TableCell>
        <CustomButtonBox color={'link'} onClick={() => onClickActionHandle('name')}>
          {name}
        </CustomButtonBox>
      </TableCell>
      <TableCell title={cardsCount} />
      <TableCell title={updated} />
      <TableCell title={user_name} />
      <TablePackListAction user_id={user_id} authUser_id={authUser_id}>
        <CustomButtonBox color="link" onClick={() => onClickActionHandle('learn')}>
          <IconLearnSVG />
        </CustomButtonBox>
        <CustomButtonBox color="link" onClick={() => onClickActionHandle('edit')}>
          <IconEditSvg />
        </CustomButtonBox>
        <CustomButtonBox color="link" onClick={() => onClickActionHandle('delete')}>
          <IconDeleteSvg />
        </CustomButtonBox>
      </TablePackListAction>
    </div>
  )
}
