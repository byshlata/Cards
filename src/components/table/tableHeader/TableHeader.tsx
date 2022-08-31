import React from 'react'

import { SortElement } from 'components/sortElement/SortElement'
import { useAppDispatch } from 'hooks'
import { setPackParams } from 'store'
import { SortParamType } from 'types'

import { sortArrow } from '../index'
import { TableCell } from '../tableCell/TableCell'

import style from './TableHeader.module.sass'

type TableHeaderType = {
  title: string
  sortParam: SortParamType
}

const TABLET_HEADER: TableHeaderType[] = [
  {
    title: 'Name',
    sortParam: 'name',
  },
  {
    title: 'Cards',
    sortParam: 'cardsCount',
  },
  {
    title: 'Last Updated',
    sortParam: 'updated',
  },
]

export const TableHeader = () => {
  const dispatch = useAppDispatch()

  const onSortColumn = (sortValue: string) => {
    dispatch(setPackParams({ sortPacks: sortValue }))
  }

  return (
    <div className={style.headerWrapper}>
      {TABLET_HEADER.map(({ sortParam, title }) => (
        <TableCell key={title} title={title}>
          <SortElement onSort={onSortColumn} sortParam={sortParam} />
        </TableCell>
      ))}
      <div className={style.tableHeaderWithButton}>
        <TableCell title={'Created By'} />
        <div>
          <img src={sortArrow} alt={'sort arrow'} className={style.sortArrow} />
        </div>
      </div>
      <TableCell title={'Actions'} />
    </div>
  )
}
