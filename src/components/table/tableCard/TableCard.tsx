import React from 'react'

import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorAuthUserId, selectorCardData, setCardParams } from 'store'
import { BackValueType, TableHeadElementType } from 'types'
import { formattedDate } from 'utils'

import { TableHeader } from '../component/tableHeader/TableHeader'

import style from './TableCard.module.sass'
import { TableCardRow } from './tableCardRow/TableCardRow'

type TableCardType = {
  heardTableData: TableHeadElementType[]
  onClickActionTable?: (
    idCard: string,
    question: string,
    answer: string,
    action: BackValueType
  ) => void
}

export const TableCard = ({ heardTableData, onClickActionTable }: TableCardType) => {
  const dispatch = useAppDispatch()

  const packData = useSelector(selectorCardData)
  const userId = useSelector(selectorAuthUserId)

  const onSortValue = (sortValue: string) => {
    dispatch(setCardParams({ sortCards: sortValue }))
  }

  const mappedPacks = packData.map(
    ({ user_id, _id, question, updated, created, answer, grade }) => (
      <TableCardRow
        onClickAction={onClickActionTable}
        key={_id}
        create={created}
        updated={formattedDate(updated)}
        user_id={user_id}
        authUser_id={userId}
        _id={_id}
        answer={answer}
        question={question}
        grade={grade || 0}
      />
    )
  )

  return (
    <div className={style.tableWrapper}>
      <TableHeader headData={heardTableData} onSortColumn={onSortValue} />
      {mappedPacks}
    </div>
  )
}
