import React, { useEffect, useState } from 'react'

import { CustomInput } from 'components'
import { useCustomInput } from 'components/input/customInput/hooks'
import style from 'components/search/Search.module.sass'
import { useAppDispatch, useDebounce } from 'hooks'
import { useSelector } from 'react-redux'
import { getPackData, selectorCardPacksTotalCount, selectorIsLoading } from 'store'

export const Search = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const countPage = useSelector(selectorCardPacksTotalCount)

  const [error, setError] = useState('')

  const { value, onChange } = useCustomInput('')
  const debounceValue = useDebounce(value)

  useEffect(() => {
    if (value === debounceValue && debounceValue !== '') {
      dispatch(getPackData({ packName: debounceValue }))
    }
  }, [debounceValue])

  useEffect(() => {
    if (countPage) {
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
