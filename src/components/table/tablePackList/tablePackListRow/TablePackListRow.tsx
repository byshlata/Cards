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
  onClickAction: (idPack: string, backValue: BackValueType, name: string) => void
}

const COUNT_COLUMN_TABLE = 6

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
    if (backValue === 'edit' || backValue === 'delete' || backValue === 'learn') {
      onClickAction(pack_id, backValue, name)
    } else {
      onClickAction(pack_id, backValue, '')
    }
  }

  return (
    <div className={style.rowWrapper}>
      <TableCell countCell={COUNT_COLUMN_TABLE}></TableCell>
      <TableCell countCell={COUNT_COLUMN_TABLE}>
        <CustomButtonBox color={'link'} onClick={() => onClickActionHandle('name')}>
          {name}
        </CustomButtonBox>
      </TableCell>
      <TableCell title={cardsCount} countCell={COUNT_COLUMN_TABLE} />
      <TableCell title={updated} countCell={COUNT_COLUMN_TABLE} />
      <TableCell title={user_name} countCell={COUNT_COLUMN_TABLE} />
      <TableCell countCell={COUNT_COLUMN_TABLE}>
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
      </TableCell>
    </div>
  )
}
