import { useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'
import { CardParamsInitialType, PackParamsInitialType } from 'types'
import { isEmptyObject, translateObjKeyToString } from 'utils'

const initialStateURLPackParams = {
  user_id: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 10,
  sortPacks: '',
  packName: '',
}

export type URLParamsType<T, K, D> = T extends K ? K : D

export const useCustomSearchParams = <T>(
  initialParams: URLParamsType<T, PackParamsInitialType, CardParamsInitialType>
) => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (isEmptyObject(Object.fromEntries(searchParams))) {
      setSearchParams(translateObjKeyToString(initialStateURLPackParams))
    }
  }, [])

  const setURLParams = (value: Partial<typeof initialParams>) => {
    setSearchParams(translateObjKeyToString(value))
  }

  const resetURLParams = () => {
    setSearchParams(JSON.stringify(initialStateURLPackParams))
  }

  return { searchParams, setURLParams, resetURLParams }
}
