import { useEffect, useState } from 'react'

import { SortParamElementType, SortParamType } from 'types'

export const useSortElement = (
  onSort: (
    sortValue: string,
    sortParam: SortParamType,
    stateSortElement: SortParamElementType
  ) => void,
  sortParam: SortParamType,
  stateSortElement: SortParamElementType
) => {
  const [sortParamElement, setSortParamElement] = useState<SortParamElementType>('off')
  let activeSortElement = [false, false]

  const onChangeSortElement = () => {
    switch (sortParamElement) {
      case 'off':
        onSort(`1${sortParam}`, sortParam, 'up')
        break
      case 'up':
        onSort(`0${sortParam}`, sortParam, 'down')
        break
      case 'down':
        onSort(``, sortParam, 'off')
    }
  }

  if (sortParamElement === 'off') {
    activeSortElement = [false, false]
  }

  if (sortParamElement === 'up') {
    activeSortElement = [true, false]
  }

  if (sortParamElement === 'down') {
    activeSortElement = [false, true]
  }

  useEffect(() => {
    setSortParamElement(stateSortElement)
  }, [stateSortElement])

  return { onChangeSortElement, activeSortElement }
}
