import React from 'react'

import { Search } from 'components/search/Search'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorPackName, setPackParams } from 'store'

export const SearchByPacks = () => {
  const dispatch = useAppDispatch()
  const searchValue = useSelector(selectorPackName)

  const onChangeValue = (debounceValue: string) => {
    dispatch(setPackParams({ packName: debounceValue }))
  }

  return <Search searchValue={searchValue} onChangeDebounceValue={onChangeValue} />
}
