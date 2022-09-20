import React from 'react'

import { useSelector } from 'react-redux'
import { selectorUsers } from 'store'
import { BackValueType, TableHeadElementType } from 'types'
import { formattedDate } from 'utils'
import { changeTableHeadData } from 'utils/changeTableHeadData'

import { TableHeader } from '../component/tableHeader/TableHeader'

import style from './TableUsers.module.sass'
import { TableUsersRow } from './tableUsersRow/TableUsersRow'

export type TabletHeadType = {
  headTableData: TableHeadElementType[]
  sortParams: string
  onClickTableAction: (idPack: string, backValue: BackValueType) => void
  onSortColumn: (sortValue: string) => void
}

export const TableUsers = ({
  headTableData,
  onClickTableAction,
  onSortColumn,
  sortParams,
}: TabletHeadType) => {
  const users = useSelector(selectorUsers)

  headTableData = changeTableHeadData(headTableData, sortParams)

  const mappedPacks = users.map(({ created, name, _id, publicCardPacksCount, avatar }) => (
    <TableUsersRow
      onClickAction={onClickTableAction}
      key={_id}
      numberOfPacks={publicCardPacksCount}
      created={formattedDate(created)}
      user_id={_id}
      user_name={name}
      avatar={avatar}
    />
  ))

  return (
    <div className={style.tableWrapper}>
      <TableHeader headTableData={headTableData} onSortColumn={onSortColumn} />
      {mappedPacks}
    </div>
  )
}
