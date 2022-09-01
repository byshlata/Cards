import React from 'react'

import { TableHeader } from 'components/table/component/tableHeader/TableHeader'
import style from 'components/table/tablePackList/TablePackList.module.sass'
import { TablePackListRow } from 'components/table/tablePackList/tablePackListRow/TablePackListRow'
import { useSelector } from 'react-redux'
import { selectorPacksData } from 'store'
import { SortParamElementType, SortParamType } from 'types'
import { formattedDate } from 'utils'

export type TableHeadElementType = {
  title: string
  sortParam: SortParamType
  stateSortElement: SortParamElementType
}

export type TabletHeadType = {
  headData: TableHeadElementType[]
}

export const TableCard = ({ headData }: TabletHeadType) => {
  const packData = useSelector(selectorPacksData)

  const onClickHandler = (idPack: string, cardsCount: number, backValue: any) => {
    console.log(idPack)
  }

  const mappedPacks = packData.map(({ user_id, _id, user_name, updated, cardsCount, name }) => (
    <TablePackListRow
      onClick={onClickHandler}
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
      <TableHeader headData={headData} />
      {mappedPacks}
    </div>
  )
}
