import React, { useCallback, useEffect } from 'react'

import { ButtonChoiceGrope, ButtonResetFilter } from 'components/button'
import { CustomSlider } from 'components/customSlider/CustomSlider'
import { FilterElementContainer } from 'components/filterElementContainer/FilterElementContainer'
import { Search } from 'components/search/Search'
import { useAppDispatch } from 'hooks'
import { useCustomSearchParams } from 'hooks/useCustomSearchParams'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
  removePackData,
  selectorAuthUserId,
  selectorIsLoading,
  selectorMaxCardsOnPack,
  selectorMinCardsOnPack,
  selectorPackName,
  selectorTotalCount,
  selectorUserParam_id,
  setPackParams,
  unmountingComponent,
} from 'store'

export const FilterContainer = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const totalPack = useSelector(selectorTotalCount)
  const packName = useSelector(selectorPackName)
  const authUserId = useSelector(selectorAuthUserId)
  const userIdParam = useSelector(selectorUserParam_id)
  const maxCards = useSelector(selectorMaxCardsOnPack)
  const minCards = useSelector(selectorMinCardsOnPack)

  const { searchParams, setParamsHelper } = useCustomSearchParams()

  useEffect(() => {
    dispatch(setPackParams(Object.fromEntries(searchParams)))
    console.log(Object.fromEntries(searchParams))
  }, [searchParams])

  const onSearch = (searchValue: string) => {
    setParamsHelper({ packName: searchValue })
  }

  const onClickButtonChoiceGrope = (value: string) => {
    setParamsHelper({ user_id: value })
  }

  const onChangeValueSlider = (max: number, min: number) => {
    setParamsHelper({ max: max.toString() })
    setParamsHelper({ min: max.toString() })
  }

  const onResetFilter = () => {
    dispatch(unmountingComponent())
  }

  const errorSearchValue = totalPack ? '' : !packName ? '' : 'Cards not found'

  return (
    <>
      <FilterElementContainer title="Search">
        <Search
          searchValue={searchParams.get('packName') || ''}
          onChangeDebounceValue={onSearch}
          disabled={disabled}
          error={errorSearchValue}
        />
      </FilterElementContainer>
      <FilterElementContainer title="Show packs cards">
        <ButtonChoiceGrope
          disabled={disabled}
          authUserId={authUserId}
          onClickButton={onClickButtonChoiceGrope}
          userIdParam={userIdParam}
        />
      </FilterElementContainer>
      <FilterElementContainer title="Number of cards">
        <CustomSlider onChange={onChangeValueSlider} maxCards={maxCards} minCards={minCards} />
      </FilterElementContainer>
      <FilterElementContainer>
        <ButtonResetFilter onResetFilter={onResetFilter} disabled={disabled} />
      </FilterElementContainer>
    </>
  )
}
