import React, { useEffect, useState } from 'react'

import { API_CONFIG } from '../../api/config'
import { PackType } from '../../types/PacksType'

import style from './Table.module.sass'
import { TableHeader } from './tableHeader/TableHeader'
import { TableRow } from './tableRow/TableRow'

export const Table = () => {
  useEffect(() => {
    API_CONFIG.get('cards/pack').then((res) => {
      setPacks(res.data.cardPacks)
      console.log(res.data.cardPacks)
    })
  }, [])

  const START_FORMAT_DATE = 0
  const END_FORMAT_DATE = 10
  const formattedDate = (data: string) => {
    return data.slice(START_FORMAT_DATE, END_FORMAT_DATE).split('-').reverse().join('.')
  }
  const [packs, setPacks] = useState<PackType[]>([])
  const mappedPacks = packs.map((p) => (
    <TableRow
      key={p._id}
      name={p.name}
      cardsCount={p.cardsCount}
      updated={formattedDate(p.updated)}
      user_id={p.user_id}
      user_name={p.user_name}
    />
  ))

  return (
    <div className={style.tableWrapper}>
      <TableHeader />
      {mappedPacks}
    </div>
  )
}
