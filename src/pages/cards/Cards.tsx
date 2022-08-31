import React from 'react'

import { Table } from '../../components'
import { TableHeadElementType } from '../../components/table/Table'

export const Cards = () => {
  const CARD_HEADER: TableHeadElementType[] = [
    {
      title: 'Question',
      sortParam: 'name',
      stateSortElement: 'off',
    },
    {
      title: 'Answer',
      sortParam: 'name',
      stateSortElement: 'off',
    },
    {
      title: 'Last Updated',
      sortParam: 'name',
      stateSortElement: 'off',
    },
  ]

  return (
    <div>
      <Table headData={CARD_HEADER} />
    </div>
  )
}
