import React from 'react'

import { useSelector } from 'react-redux'
import { selectorPacksData } from 'store'
import { formattedDate } from 'utils'

import style from './Table.module.sass'
import { TableHeader } from './tableHeader/TableHeader'
import { TableRow } from './tableRow/TableRow'

export const Table = () => {
  const packData = useSelector(selectorPacksData)
  const mappedPacks = packData.map(({ user_id, _id, user_name, updated, cardsCount, name }) => (
    <TableRow
      key={_id}
      name={name}
      cardsCount={cardsCount}
      updated={formattedDate(updated)}
      user_id={user_id}
      user_name={user_name}
    />
  ))

  return (
    <div className={style.tableWrapper}>
      <TableHeader />
      {mappedPacks}
    </div>
  )
}
