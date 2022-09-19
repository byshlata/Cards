import React from 'react'

import {
  ButtonChoiceGrope,
  ButtonResetFilter,
  CustomSlider,
  FilterElementContainer,
  Search,
} from 'components'
import { useSelector } from 'react-redux'
import { selectorAuthUserId, selectorTotalCountPagePack } from 'store'

type FilterContainerType = {
  disabled: boolean
  onSearchName: (searchValue: string) => void
  onClickButtonChoiceGrope: (value: string) => void
  onChangeSlider: (max: number, min: number) => void
  onResetFilter: () => void
  searchName: string
  sliderMax: number
  sliderMin: number
  userId: string
}

export const FilterContainer = ({
  onResetFilter,
  onSearchName,
  onClickButtonChoiceGrope,
  onChangeSlider,
  disabled,
  sliderMax,
  sliderMin,
  userId,
  searchName,
}: FilterContainerType) => {
  const totalPack = useSelector(selectorTotalCountPagePack)
  const authUserId = useSelector(selectorAuthUserId)

  const errorSearchValue = totalPack ? '' : !searchName ? '' : 'Cards not found'

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
        <CustomSlider
          onChangeSlider={onChangeSlider}
          maxCards={sliderMax}
          minCards={sliderMin}
          disabled={disabled}
        />
      </FilterElementContainer>
      <FilterElementContainer>
        <ButtonResetFilter onResetFilter={onResetFilter} disabled={disabled} />
      </FilterElementContainer>
    </>
  )
}
