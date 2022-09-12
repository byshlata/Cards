import React, { memo, useEffect } from 'react'

import { CustomInput } from 'components'
import { useCustomInput } from 'components/input/customInput/hooks'
import { useDebounce } from 'hooks'

import style from './Search.module.sass'

type SearchType = {
  error: string
  disabled: boolean
  searchValue: string
  onChangeDebounceValue: (debounceValue: string) => void
}

export const Search = memo(
  ({ searchValue, onChangeDebounceValue, disabled, error }: SearchType) => {
    console.log('Search', searchValue)

    const [value, onChange] = useCustomInput(searchValue)

    const debounceValue = useDebounce(value)

    useEffect(() => {
      if (searchValue !== debounceValue) {
        onChangeDebounceValue(debounceValue)
      }
    }, [debounceValue])

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
)
