import React, { memo } from 'react'

import { useSortElement } from './hooks/useSortElement'
import style from './SortElement.module.sass'

import { IconSortElementSvg } from 'components/iconSVG/iconSortElementSVG/IconSortElementSVG'
import { TableHeadElementType } from 'components/table/Table'
import { SortParamElementType, SortParamType } from 'types'

export type SortElementType = {
  onSort: (
    sortValue: string,
    sortParam: SortParamType,
    stateSortElement: SortParamElementType
  ) => void
  sortParam: SortParamType
  stateSortElement: SortParamElementType
}

export const SortElement = memo(({ onSort, sortParam, stateSortElement }: SortElementType) => {
  const { activeSortElement, onChangeSortElement } = useSortElement(
    onSort,
    sortParam,
    stateSortElement
  )

  return (
    <div className={style.sortElementWrapper} onClick={onChangeSortElement}>
      <IconSortElementSvg rotate={false} isActive={activeSortElement[0]} />
      <IconSortElementSvg rotate isActive={activeSortElement[1]} />
    </div>
  )
})
