import React from 'react'

import { ButtonChoiceGrope, ButtonResetFilter } from 'components/button'
import { CustomSlider } from 'components/customSlider/CustomSlider'
import { FilterElementContainer } from 'components/filterElementContainer/FilterElementContainer'
import { Search } from 'components/search/Search'
import { useSelector } from 'react-redux'
import {
  selectorAuthUserId,
  selectorMaxCardsOnPack,
  selectorMinCardsOnPack,
  selectorPackName,
  selectorTotalCountPagePack,
  selectorUserParam_id,
} from 'store'

type FilterContainerType = {
  disabled: boolean
  onSearchName: (searchValue: string) => void
  onClickButtonChoiceGrope: (value: string) => void
  onChangeSlider: (max: number, min: number) => void
  onResetFilter: () => void
}

export const FilterContainer = ({
  onResetFilter,
  onSearchName,
  onClickButtonChoiceGrope,
  onChangeSlider,
  disabled,
}: FilterContainerType) => {
  const totalPack = useSelector(selectorTotalCountPagePack)

  const authUserId = useSelector(selectorAuthUserId)
  const searchName = useSelector(selectorPackName)
  const sliderMax = useSelector(selectorMaxCardsOnPack)
  const sliderMin = useSelector(selectorMinCardsOnPack)
  const userId = useSelector(selectorUserParam_id)

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
