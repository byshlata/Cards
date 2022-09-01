import React from 'react'

import { CustomButtonBox } from 'components/button'
import { IconDeleteSvg } from 'components/iconSVG/iconDeleteSVG/IconDeleteSVG'
import { IconEditSvg } from 'components/iconSVG/iconEditSVG/IconEditSVG'
import { IconLearnSVG } from 'components/iconSVG/iconLearnSVG/IconLearnSVG'
import { TableCell } from 'components/table/component/tableCell/TableCell'
import { TablePackListAction } from 'components/table/tablePackList/tablePackListAction/TablePackListAction'
import style from 'components/table/tablePackList/tablePackListRow/TablePackListRow.module.sass'

type TableSimpleRowType = {
  name: string
  pack_id: string
  user_id: string
  cardsCount: number
  updated: string
  user_name: string
  onClick: (idPack: string, cardsCount: number, backValue: BackValueType) => void
}

type BackValueType = 'name' | 'edit' | 'learn' | 'delete'

export const TablePackListRow = ({
  name,
  user_id,
  pack_id,
  user_name,
  updated,
  cardsCount,
  onClick,
}: TableSimpleRowType) => {
  const onClickNameHandle = (value: BackValueType) => {
    onClick(pack_id, cardsCount, value)
  }

  return (
    <div className={style.rowWrapper}>
      <TableCell>
        <CustomButtonBox color={'link'} onClick={() => onClickNameHandle('name')}>
          {name}
        </CustomButtonBox>
      </TableCell>
      <TableCell title={cardsCount} />
      <TableCell title={updated} />
      <TableCell title={user_name} />
      <TablePackListAction user_id={user_id}>
        <CustomButtonBox color="link" onClick={() => onClickNameHandle('learn')}>
          <IconLearnSVG />
        </CustomButtonBox>
        <CustomButtonBox color="link" onClick={() => onClickNameHandle('edit')}>
          <IconEditSvg />
        </CustomButtonBox>
        <CustomButtonBox color="link" onClick={() => onClickNameHandle('delete')}>
          <IconDeleteSvg />
        </CustomButtonBox>
      </TablePackListAction>
    </div>
  )
}
