import React from 'react'

import { Search, TitleWithButton } from 'components'
import { useSelector } from 'react-redux'
import { selectorIsLoading } from 'store'

export const AllUserPack = () => {
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
