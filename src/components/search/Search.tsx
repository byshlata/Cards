import React, { useEffect, useState } from 'react'

import { CustomInput } from 'components'
import { useCustomInput } from 'components/input/customInput/hooks'
import style from 'components/search/Search.module.sass'
import { useDebounce } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorCardPacksTotalCount, selectorIsLoading } from 'store'

type SearchType = {
  searchValue: string
  onChangeDebounceValue: (debounceValue: string) => void
}

export const Search = ({ searchValue, onChangeDebounceValue }: SearchType) => {
  const disabled = useSelector(selectorIsLoading)
  const countPage = useSelector(selectorCardPacksTotalCount)

  const [error, setError] = useState('')

  const { value, onChange } = useCustomInput(searchValue)
  const debounceValue = useDebounce(value)

  useEffect(() => {
    if (value === debounceValue) {
      onChangeDebounceValue(debounceValue)
    }
  }, [debounceValue])

  useEffect(() => {
    if (countPage || value === '') {
      setError('')
    } else {
      setError('Cards not found')
    }
  }, [countPage])

  return (
    <div className={style.searchWrapper}>
      <CustomInput
        type="search"
        value={value}
        onChange={onChange}
        disabled={disabled}
        error={error}
      />
    </div>
  )
}
