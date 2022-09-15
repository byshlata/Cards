import React from 'react'

import { TitleWithButton } from 'components'
import { BasicContentCardPage } from 'pages/cardsPack/components/basicContentCardPage/BasicContentCardPage'
import { useSelector } from 'react-redux'
import { selectorCardQuestion, selectorIsLoading, selectorSortCards } from 'store'

import { TABLET_HEADER_ALL_USER } from './optionHeaderTableAllUser/optionTableHeaderAllUser'

type CarsPackAllUserType = {
  titlePack: string
  idPack: string | undefined
  onSortColumn: (sortValue: string) => void
  onChangePagination: (page: number, pageSize: number) => void
  onSearchByQuestion: (searchValue: string) => void
  onResetFilter: () => void
}

export const CarsPackAllUser = ({
  titlePack,
  idPack,
  onSortColumn,
  onChangePagination,
  onSearchByQuestion,
  onResetFilter,
}: CarsPackAllUserType) => {
  const onLearn = () => {}

  const disabled = useSelector(selectorIsLoading)
  const searchCardQuestion = useSelector(selectorCardQuestion)
  const sortParam = useSelector(selectorSortCards)

  return (
    <>
      <TitleWithButton titleText={titlePack} buttonText="Learn to pack" onClick={onLearn} />
      <BasicContentCardPage
        tableHeadData={TABLET_HEADER_ALL_USER}
        disabled={disabled}
        searchCardQuestion={searchCardQuestion}
        sortParam={sortParam}
        onSortColumn={onSortColumn}
        onSearchByQuestion={onSearchByQuestion}
        onResetFilter={onResetFilter}
        onChangePagination={onChangePagination}
        onClickActionTable={onLearn}
      />
    </>
  )
}
