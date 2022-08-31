import React from 'react'

import { IconSortElementSvg } from 'components/iconSVG/iconSortElementSVG/IconSortElementSVG'
import { SortParamType } from 'types'

import { useSortElement } from './hooks/useSortElement'
import style from './SortElement.module.sass'

export type SortElementType = {
  onSort: (sortValue: string) => void
  sortParam: SortParamType
}

export const SortElement = React.memo(({ onSort, sortParam }: SortElementType) => {
  const { activeSortElement, onChangeSortElement } = useSortElement(onSort, sortParam)
  return (
    <div className={style.sortElementWrapper} onClick={onChangeSortElement}>
      <IconSortElementSvg rotate={false} isActive={activeSortElement[0]} />
      <IconSortElementSvg rotate isActive={activeSortElement[1]} />
    </div>
  )
})
