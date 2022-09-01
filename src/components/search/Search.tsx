import React, { useEffect, useState } from 'react'

import { CustomInput } from 'components/index'
import { useCustomInput } from 'components/input/customInput/hooks'
import style from 'components/search/Search.module.sass'
import { useDebounce } from 'hooks'

type SearchType = {
  error: string
  disabled: boolean
  searchValue: string
  onChangeDebounceValue: (debounceValue: string) => void
}

export const Search = ({ searchValue, onChangeDebounceValue, disabled }: SearchType) => {
  const [error, setError] = useState('')

  const { value, onChange } = useCustomInput(searchValue)
  const debounceValue = useDebounce(value)

  useEffect(() => {
    if (searchValue !== debounceValue) {
      onChangeDebounceValue(debounceValue)
    }
  }, [debounceValue])

  useEffect(() => {
    if (error) {
      setError(error)
    } else {
      setError('')
    }
  }, [error])

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
