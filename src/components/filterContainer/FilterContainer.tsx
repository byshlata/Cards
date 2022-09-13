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
  selectorUserParam_id,
} from 'store'

type FilterContainerType = {
  disabled: boolean
  searchName: string
  sliderMax: number
  sliderMin: number
  userId: string
  onSearchName: (searchValue: string) => void
  onClickButtonChoiceGrope: (value: string) => void
  onChangeValueSlider: (max: number, min: number) => void
  onResetFilter: () => void
}

export const FilterContainer = ({
  onResetFilter,
  onSearchName,
  onClickButtonChoiceGrope,
  onChangeValueSlider,
  searchName,
  disabled,
  userId,
  sliderMin,
  sliderMax,
}: FilterContainerType) => {
  const totalPack = useSelector(selectorTotalCount)
  const packName = useSelector(selectorPackName)
  const authUserId = useSelector(selectorAuthUserId)

  const errorSearchValue = totalPack ? '' : !packName ? '' : 'Cards not found'

  return (
    <>
      <FilterElementContainer title="Search">
        <Search
          searchValue={searchName}
          onChangeDebounceValue={onSearchName}
          disabled={disabled}
          error={errorSearchValue}
        />
      </FilterElementContainer>
      <FilterElementContainer title="Show packs cards">
        <ButtonChoiceGrope
          disabled={disabled}
          authUserId={authUserId}
          onClickButton={onClickButtonChoiceGrope}
          userIdParam={userId}
        />
      </FilterElementContainer>
      <FilterElementContainer title="Number of cards">
        <CustomSlider onChange={onChangeValueSlider} maxCards={sliderMax} minCards={sliderMin} />
      </FilterElementContainer>
      <FilterElementContainer>
        <ButtonResetFilter onResetFilter={onResetFilter} disabled={disabled} />
      </FilterElementContainer>
    </>
  )
}
