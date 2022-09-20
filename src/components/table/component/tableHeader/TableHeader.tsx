import React, { useCallback, useEffect, useState } from 'react'

import { SortElement } from 'components'
import { TABLET_HEADER_PACK_LIST } from 'pages/packsList/optionHeaderTable/optionHeaderTable'
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
    },
    [tableHeadData]
  )

  useEffect(() => {
    setTableHeadData(headTableData)
  }, [headTableData])

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
