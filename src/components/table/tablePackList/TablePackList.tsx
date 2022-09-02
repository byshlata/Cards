import React from 'react'

import { TableHeader } from 'components/table/component/tableHeader/TableHeader'
import style from 'components/table/tablePackList/TablePackList.module.sass'
import { TablePackListRow } from 'components/table/tablePackList/tablePackListRow/TablePackListRow'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectorPacksData, setCardParams, setPackParams } from 'store'
import { BackValueType, TableHeadElementType } from 'types'
import { formattedDate } from 'utils'

export type TabletHeadType = {
  headData: TableHeadElementType[]
}

export const TablePackList = ({ headData }: TabletHeadType) => {
  const dispatch = useAppDispatch()

  const packData = useSelector(selectorPacksData)

  const navigate = useNavigate()

  const onClickHandler = (idPack: string, cardsCount: number, backValue: BackValueType) => {
    switch (backValue) {
      case 'name':
        navigate(`${Path.Pack}${Path.Root}${idPack}`)
    }
  }

  const onSortValue = (sortValue: string) => {
    dispatch(setPackParams({ packName: sortValue }))
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
      <TableHeader headData={headData} onSortColumn={onSortValue} />
      {mappedPacks}
    </div>
  )
}
