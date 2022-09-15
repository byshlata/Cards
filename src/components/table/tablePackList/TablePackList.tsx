import React from 'react'

import { useSelector } from 'react-redux'
import { selectorAuthUserId, selectorPacksData } from 'store'
import { BackValueType, TableHeadElementType } from 'types'
import { formattedDate } from 'utils'
import { changeTableHeadData } from 'utils/changeTableHeadData'

import { TableHeader } from '../component/tableHeader/TableHeader'

import style from './TablePackList.module.sass'
import { TablePackListRow } from './tablePackListRow/TablePackListRow'

export type TabletHeadType = {
  headTableData: TableHeadElementType[]
  sortParams: string
  onClickTableAction: (idPack: string, backValue: BackValueType, namePack: string) => void
  onSortColumn: (sortValue: string) => void
}

export const TablePackList = ({
  headTableData,
  onClickTableAction,
  onSortColumn,
  sortParams,
}: TabletHeadType) => {
  const packData = useSelector(selectorPacksData)
  const userId = useSelector(selectorAuthUserId)

  headTableData = changeTableHeadData(headTableData, sortParams)

  const mappedPacks = packData.map(({ user_id, _id, user_name, updated, cardsCount, name }) => (
    <TablePackListRow
      authUser_id={userId}
      onClickAction={onClickTableAction}
      key={_id}
      pack_id={_id}
      name={name}
      cardsCount={cardsCount}
      updated={formattedDate(updated)}
      user_id={user_id}
      user_name={user_name}
    />
  ))

  return (
    <div className={style.tableWrapper}>
      <TableHeader headTableData={headTableData} onSortColumn={onSortColumn} />
      {mappedPacks}
    </div>
  )
}
