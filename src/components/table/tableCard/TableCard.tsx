import React from 'react'

import { useSelector } from 'react-redux'
import { selectorAuthUserId, selectorCardData } from 'store'
import { BackValueType, TableHeadElementType } from 'types'
import { formattedDate } from 'utils'
import { changeTableHeadData } from 'utils/changeTableHeadData'

import { TableHeader } from '../component/tableHeader/TableHeader'

import style from './TableCard.module.sass'
import { TableCardRow } from './tableCardRow/TableCardRow'

type TableCardType = {
  headTableData: TableHeadElementType[]
  sortParam: string
  onClickActionTable?: (
    idCard: string,
    question: string,
    answer: string,
    action: BackValueType
  ) => void
  onSortColumn: (sortValue: string) => void
}

export const TableCard = ({
  headTableData,
  onClickActionTable,
  onSortColumn,
  sortParam,
}: TableCardType) => {
  const packData = useSelector(selectorCardData)
  const userId = useSelector(selectorAuthUserId)

  headTableData = changeTableHeadData(headTableData, sortParam)

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
      <TableHeader headTableData={headTableData} onSortColumn={onSortColumn} />
      {mappedPacks}
    </div>
  )
}
