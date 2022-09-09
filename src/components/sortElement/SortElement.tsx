import React, { memo } from 'react'

import { IconSortElementSvg } from 'components/iconSVG/iconSortElementSVG/IconSortElementSVG'
import { SortParamElementType, SortParamType } from 'types'

import { useSortElement } from './hooks/useSortElement'
import style from './SortElement.module.sass'

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
