import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { translateObjKeyToString } from 'utils'

const initialStateURLPackParams = {
  user_id: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 10,
  sortPacks: '',
  packName: '',
}

export const useCustomSearchParams = () => {
  const [params, setParams] =
    useState<Partial<typeof initialStateURLPackParams>>(initialStateURLPackParams)

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setSearchParams(translateObjKeyToString(params))
  }, [params])

  const setURLParams = (value: Partial<typeof initialStateURLPackParams>) => {
    setParams({ ...params, ...value })
  }

  const searchURLParams = Object.fromEntries(searchParams) as Partial<
    typeof initialStateURLPackParams
  >

  const resetURLParams = () => {
    setParams({ ...initialStateURLPackParams })
    setSearchParams(JSON.stringify(initialStateURLPackParams))
  }

  return { searchParams, setURLParams, resetURLParams }
}
