import React from 'react'

import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { setCardParams } from 'store'
import { selectorCardData } from 'store/selectors/selectors'
import { TabletHeadDataType } from 'types'
import { formattedDate } from 'utils'

import { TableHeader } from '../component/tableHeader/TableHeader'

import style from './TableCard.module.sass'
import { TableCardRow } from './tableCardRow/TableCardRow'

export const TableCard = ({ headData }: TabletHeadDataType) => {
  const dispatch = useAppDispatch()

  const packData = useSelector(selectorCardData)

  const onClickHandler = (idPack: string, cardsCount: number, backValue: any) => {
    console.log(idPack)
  }

  const onSortValue = (sortValue: string) => {
    dispatch(setCardParams({ sortCards: sortValue }))
  }

  const mappedPacks = packData.map(
    ({ user_id, _id, question, updated, created, answer, grade }) => (
      <TableCardRow
        onClick={onClickHandler}
        key={_id}
        create={created}
        updated={formattedDate(updated)}
        user_id={user_id}
        _id={_id}
        answer={answer}
        question={question}
        grade={grade}
      />
    )
  )

  return (
    <div className={style.tableWrapper}>
      <TableHeader headData={headData} onSortColumn={onSortValue} />
      {mappedPacks}
    </div>
  )
}
