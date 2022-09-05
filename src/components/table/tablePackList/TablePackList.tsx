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
  openModal,
} from 'store'
import { BackValueType, TableHeadElementType } from 'types'
import { formattedDate } from 'utils'

import { removePackThank } from '../../../store/thunk/removePakcThunk'
import { TableHeader } from '../component/tableHeader/TableHeader'

import style from './TablePackList.module.sass'
import { TablePackListRow } from './tablePackListRow/TablePackListRow'

export type TabletHeadType = {
  headData: TableHeadElementType[]
  onClickTableAction: (
    idPack: string,
    backValue: BackValueType,
    cardsCount: number,
    name: string
  ) => void
}

export const TablePackList = ({ headData, onClickTableAction }: TabletHeadType) => {
  const dispatch = useAppDispatch()

  const packData = useSelector(selectorPacksData)
  const userId = useSelector(selectorAuthUserId)

  const onClickHandler = (
    idPack: string,
    cardsCount: number,
    backValue: BackValueType,
    name: string
  ) => {
    onClickTableAction(idPack, backValue, cardsCount, name)
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
