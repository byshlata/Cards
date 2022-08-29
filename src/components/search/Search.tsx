import React, { useEffect, useState } from 'react'

import { CustomInput } from 'components'
import { useCustomInput } from 'components/input/customInput/hooks'
import style from 'components/search/Search.module.sass'
import { useAppDispatch, useDebounce } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorCardPacksTotalCount, selectorIsLoading, setPackParams } from 'store'
import { selectorPackName } from 'store/selectors/selectors'

export const Search = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const countPage = useSelector(selectorCardPacksTotalCount)

  const searchValue = useSelector(selectorPackName)

  const [error, setError] = useState('')

  const { value, onChange } = useCustomInput(searchValue)
  const debounceValue = useDebounce(value)

  useEffect(() => {
    if (value === debounceValue) {
      dispatch(setPackParams({ packName: debounceValue }))
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
