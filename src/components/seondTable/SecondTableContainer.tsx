import React, { useEffect, useState } from 'react'

import { API_CONFIG } from '../../api/config'
import { PackResponseType, SortParamElementType, SortParamType } from '../../types'
import { formattedDate } from '../../utils'
import { TableHeadElementType } from '../table/Table'
import { TableAction } from '../table/tableAction/TableAction'
import { TableGrade } from '../table/tableGrade/TableGrade'
import { TableRow } from '../table/tableRow/TableRow'

import { SecondTable } from './SecondTable'
import { SecondTableRow } from './secondTableRow/SecondTableRow'

export const SecondTableContainer = () => {
  type TableHeadElementType = {
    title: string
    sortParam: SortParamType
    stateSortElement: SortParamElementType
  }
  type TabletHeadType = {
    headData: TableHeadElementType[]
  }

  const TABLET_HEADER: TableHeadElementType[] = [
    {
      title: 'Name',
      sortParam: 'name',
      stateSortElement: 'off',
    },
    {
      title: 'Cards',
      sortParam: 'cardsCount',
      stateSortElement: 'off',
    },
    {
      title: 'Last updated',
      sortParam: 'updated',
      stateSortElement: 'off',
    },
    {
      title: 'Create by',
      sortParam: 'user_name',
      stateSortElement: 'off',
    },
  ]

  const [packs, setPacks] = useState<PackResponseType[]>([])

  useEffect(() => {
    API_CONFIG.get('cards/pack').then(res => {
      setPacks(res.data.cardPacks)
      console.log(res.data.cardPacks)
    })
  }, [])

  return (
    <SecondTable header={TABLET_HEADER} body={packs}>
      {<TableAction />}
    </SecondTable>
  )
}
