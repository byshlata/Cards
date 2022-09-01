import React from 'react'

import { TableHeader } from 'components/table/component/tableHeader/TableHeader'
import { TableCardRow } from 'components/table/tableCard/tableCardRow/TableCardRow'
import style from 'components/table/tablePackList/TablePackList.module.sass'
import { TablePackListRow } from 'components/table/tablePackList/tablePackListRow/TablePackListRow'
import { useSelector } from 'react-redux'
import { selectorPacksData } from 'store'
import { selectorCardData } from 'store/selectors/selectors'
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
  const packData = useSelector(selectorCardData)

  const onClickHandler = (idPack: string, cardsCount: number, backValue: any) => {
    console.log(idPack)
  }

  const mappedPacks = packData.map(({ user_id, _id, question, updated, answer, grade }) => (
    <TableCardRow
      onClick={onClickHandler}
      key={_id}
      updated={formattedDate(updated)}
      user_id={user_id}
      _id={_id}
      answer={answer}
      question={question}
      grade={grade}
    />
  ))

  return (
    <div className={style.tableWrapper}>
      <TableHeader headData={headData} />
      {mappedPacks}
    </div>
  )
}
