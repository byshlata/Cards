import React from 'react'

import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  selectorPacksData,
  selectorAuthUserId,
  setPackParams,
  selectorTotalCountCard,
  setWarningMessage,
} from 'store'
import { BackValueType, TableHeadElementType } from 'types'
import { formattedDate } from 'utils'

import { TableHeader } from '../component/tableHeader/TableHeader'

import style from './TablePackList.module.sass'
import { TablePackListRow } from './tablePackListRow/TablePackListRow'

export type TabletHeadType = {
  headData: TableHeadElementType[]
}

export const TablePackList = ({ headData }: TabletHeadType) => {
  const dispatch = useAppDispatch()

  const packData = useSelector(selectorPacksData)
  const userId = useSelector(selectorAuthUserId)

  const navigate = useNavigate()

  const onClickHandler = (idPack: string, cardsCount: number, backValue: BackValueType) => {
    switch (backValue) {
      case 'name':
        if (cardsCount) {
          navigate(`${Path.Pack}${Path.Root}${idPack}`)
        } else {
          dispatch(setWarningMessage('Pack not have cards'))
        }
    }
  }

  const onSortValue = (sortValue: string) => {
    dispatch(setPackParams({ sortPacks: sortValue }))
  }

  const mappedPacks = packData.map(({ user_id, _id, user_name, updated, cardsCount, name }) => (
    <TablePackListRow
      authUser_id={userId}
      onClickAction={onClickHandler}
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
