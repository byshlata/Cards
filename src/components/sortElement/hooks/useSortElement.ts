import { useEffect, useState } from 'react'

import { SortParamType } from 'types'

const HELP_MAGIC_INDEX_TWO = 2
const SORT_ELEMENT = ['', '1', '0']

export const useSortElement = (onSort: (sortValue: string) => void, sortParam: SortParamType) => {
  const [count, setCount] = useState<number>(0)
  const [activeSortElement, setActiveSortElement] = useState<boolean[]>([false, false])

  const onChangeSortElement = () => {
    if (count < HELP_MAGIC_INDEX_TWO) {
      setCount(count + 1)
      onSort(`${SORT_ELEMENT[count + 1]}${sortParam}`)
    } else {
      setCount(0)
      onSort('')
    }
  }

  useEffect(() => {
    if (count === 0) {
      setActiveSortElement([false, false])
    }

    if (count === 1) {
      setActiveSortElement([true, false])
    }

    if (count === HELP_MAGIC_INDEX_TWO) {
      setActiveSortElement([false, true])
    }
  }, [count])

  return { onChangeSortElement, activeSortElement }
}
