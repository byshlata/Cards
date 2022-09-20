import React from 'react'

import { ButtonResetFilter, CustomSlider, FilterElementContainer, Search } from 'components'
import { useSelector } from 'react-redux'
import {
  selectorMaxPacks,
  selectorMinPacks,
  selectorSearchUserName,
  selectorTotalCountPagePack,
} from 'store'

type FilterContainerType = {
  disabled: boolean
  onSearchName: (searchValue: string) => void
  onChangeSlider: (max: number, min: number) => void
  onResetFilter: () => void
}

export const FilterContainerUsers = ({
  onResetFilter,
  onSearchName,
  onChangeSlider,
  disabled,
}: FilterContainerType) => {
  const totalPack = useSelector(selectorTotalCountPagePack)

  const maxPacks = useSelector(selectorMaxPacks)
  const minPacks = useSelector(selectorMinPacks)
  const searchName = useSelector(selectorSearchUserName)

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
      <FilterElementContainer title="Number of packs">
        <CustomSlider
          onChangeSlider={onChangeSlider}
          maxCards={maxPacks}
          minCards={minPacks}
          disabled={disabled}
        />
      </FilterElementContainer>
      <FilterElementContainer>
        <ButtonResetFilter onResetFilter={onResetFilter} disabled={disabled} />
      </FilterElementContainer>
    </>
  )
}
