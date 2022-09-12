import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

const initialStateURLPackParams = {
  user_id: '',
  max: '110',
  min: '0',
  page: '1',
  pageCount: '8',
  sortPacks: '',
  packName: '',
}

export const useCustomSearchParams = () => {
  const [params, setParams] =
    useState<Partial<typeof initialStateURLPackParams>>(initialStateURLPackParams)

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setSearchParams({ ...params })
  }, [params])

  const setParamsHelper = (value: Partial<typeof initialStateURLPackParams>) => {
    setParams({ ...params, ...value })
  }

  return { searchParams, setParamsHelper }
}
