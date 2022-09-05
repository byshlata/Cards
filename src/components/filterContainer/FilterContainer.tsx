import React from 'react'

import { ButtonChoiceGrope, ButtonResetFilter } from 'components/button'
import { CustomSlider } from 'components/customSlider/CustomSlider'
import { FilterElementContainer } from 'components/filterElementContainer/FilterElementContainer'
import { Search } from 'components/search/Search'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  selectorAuthUserId,
  selectorIsLoading,
  selectorMaxCardsOnPack,
  selectorMinCardsOnPack,
  selectorPackName,
  selectorTotalCount,
  setPackParams,
  unmountingComponent,
} from 'store'

export const FilterContainer = () => {
  const dispatch = useAppDispatch()

  const disabled = useSelector(selectorIsLoading)
  const totalPack = useSelector(selectorTotalCount)
  const packName = useSelector(selectorPackName)
  const idUser = useSelector(selectorAuthUserId)
  const maxCards = useSelector(selectorMaxCardsOnPack)
  const minCards = useSelector(selectorMinCardsOnPack)

  const onSearch = (searchValuer: string) => {
    dispatch(setPackParams({ packName: searchValuer }))
  }

  const onClickButtonChoiceGrope = (value: string) => {
    dispatch(setPackParams({ user_id: value }))
  }

  const onChangeValueSlider = (max: number, min: number) => {
    dispatch(setPackParams({ max, min }))
  }

  const onResetFilter = () => {
    dispatch(unmountingComponent())
  }

  const errorSearchValue = totalPack ? '' : 'Cards not found'

  return (
    <>
      <FilterElementContainer title="Search">
        <Search
          searchValue={packName}
          onChangeDebounceValue={onSearch}
          disabled={disabled}
          error={errorSearchValue}
        />
      </FilterElementContainer>
      <FilterElementContainer title="Show packs cards">
        <ButtonChoiceGrope
          disabled={disabled}
          value={idUser}
          onClickButton={onClickButtonChoiceGrope}
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
