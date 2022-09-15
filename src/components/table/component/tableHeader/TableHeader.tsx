import React, { useCallback, useState } from 'react'

import { SortElement } from 'components'
import {
  SortParamElementType,
  SortParamType,
  TableHeadElementType,
  TabletHeadDataType,
} from 'types'
import { setParamFilter } from 'utils/setParamFilter'

import { TableCell } from '../tableCell/TableCell'

import style from './TableHeader.module.sass'

type TableHeaderType = TabletHeadDataType & {
  onSortColumn: (sortValue: string) => void
}

export const TableHeader = ({ headTableData, onSortColumn }: TableHeaderType) => {
  const [tableHeadData, setTableHeadData] = useState<TableHeadElementType[]>(headTableData)

  const onSortColumnHandler = useCallback(
    (sortValue: string, sortParam: SortParamType, stateSortElement: SortParamElementType) => {
      onSortColumn(sortValue)

      const changeParam = setParamFilter(tableHeadData, sortParam, stateSortElement)

      if (changeParam) {
        setTableHeadData(changeParam)
      }
    },
    [tableHeadData]
  )

  return (
    <div className={style.headerWrapper}>
      {tableHeadData.map(({ sortParam, title, stateSortElement, type }) => {
        return type === 'sort' ? (
          <TableCell key={title} title={title}>
            <SortElement
              stateSortElement={stateSortElement}
              onSort={onSortColumnHandler}
              sortParam={sortParam}
            />
          </TableCell>
        ) : (
          <TableCell key={title} title={title} />
        )
      })}
    </div>
  )
}
