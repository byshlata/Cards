import React from 'react'

import { Search, TitleWithButton } from 'components'
import { useSelector } from 'react-redux'
import { openCloseAddNewPackModal, selectorIsLoading } from 'store'

import { useAppDispatch } from '../../../hooks'

export const AllUserPack = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectorIsLoading)
  const learnPack = () => {}
  const onSearch = (searchValue: string) => {}

  return (
    <>
      <TitleWithButton titleText="Friend’s Pack" buttonText="Learn to pack" onClick={learnPack} />
      <div>
        <Search
          disabled={isLoading}
          searchValue={'fdsf'}
          error={'ddsf'}
          onChangeDebounceValue={onSearch}
        />
      </div>
    </>
  )
}
