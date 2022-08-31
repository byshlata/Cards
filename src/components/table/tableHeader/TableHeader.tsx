import React, { useCallback, useState } from 'react'

import { sortArrow } from '../index'
import { TableHeadElementType, TabletHeadType } from '../Table'
import { TableCell } from '../tableCell/TableCell'

import style from './TableHeader.module.sass'

import { SortElement } from 'components/sortElement/SortElement'
import { useAppDispatch } from 'hooks'
import { setPackParams } from 'store'
import { SortParamElementType, SortParamType } from 'types'
import { setParamFilter } from 'utils/setParamFilter'

export const TableHeader = ({ headData }: TabletHeadType) => {
  const dispatch = useAppDispatch()
  const [tableHeadData, setTableHeadData] = useState<TableHeadElementType[]>(headData)

  const onSortColumn = useCallback(
    (sortValue: string, sortParam: SortParamType, stateSortElement: SortParamElementType) => {
      dispatch(setPackParams({ sortPacks: sortValue }))
      const changeParam = setParamFilter(tableHeadData, sortParam, stateSortElement)

      if (changeParam) {
        setTableHeadData(changeParam)
      }
    },
    [tableHeadData]
  )

  return (
    <div className={style.headerWrapper}>
      {tableHeadData.map(({ sortParam, title, stateSortElement }) => (
        <TableCell key={title} title={title}>
          <SortElement
            stateSortElement={stateSortElement}
            onSort={onSortColumn}
            sortParam={sortParam}
          />
        </TableCell>
      ))}
      <TableCell title={'Actions'} />
    </div>
  )
}
