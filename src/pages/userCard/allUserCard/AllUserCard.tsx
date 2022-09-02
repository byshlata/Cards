import React, { useEffect } from 'react'

import { Pagination } from 'antd'
import { ButtonResetFilter, Search, TableCard, TitleWithButton } from 'components'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  mountingComponent,
  removeIsFirstOpenCardPage,
  selectorIsLoading,
  selectorIsMounting,
  setCardParams,
  setIsFirstOpenCardPage,
  unmountingComponent,
} from 'store'
import {
  selectorCurrentPageCard,
  selectorParamsCard,
  selectorTotalCountCard,
} from 'store/selectors/selectors'
import { initialStateCardParams, resetCardParams } from 'store/slice/cardParamsSlice'
import { getCardData } from 'store/thunk/cardThunk'
import { TableHeadElementType } from 'types'

const TABLET_HEADER: TableHeadElementType[] = [
  {
    title: 'Question',
    sortParam: 'question',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Answer',
    sortParam: 'answer',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Last updated',
    sortParam: 'updated',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Create by',
    sortParam: 'user_name',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Grad',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
]

export const AllUserCard = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const totalCard = useSelector(selectorTotalCountCard)
  const currentPage = useSelector(selectorCurrentPageCard)
  const paramsCard = useSelector(selectorParamsCard)
  const isMounting = useSelector(selectorIsMounting)

  useEffect(() => {
    if (paramsCard.isFirstOpen) {
      dispatch(getCardData(paramsCard))
    }
  }, [paramsCard])

  useEffect(() => {
    if (isMounting) {
      dispatch(resetCardParams())
      dispatch(mountingComponent())
    }
  }, [isMounting])

  useEffect(() => {
    dispatch(setIsFirstOpenCardPage())

    return () => {
      dispatch(removeIsFirstOpenCardPage())
    }
  }, [])

  const onchangePagination = (page: number, pageSize: number) => {
    dispatch(setCardParams({ page: page }))
  }

  const onSearch = (searchValuer: string) => {
    dispatch(setCardParams({ cardQuestion: searchValuer }))
  }

  const onResetFilter = () => {
    dispatch(unmountingComponent())
  }

  const errorSearchValue = totalCard ? '' : 'Cards not found'

  const onLearnCard = () => {}

  return (
    <>
      <TitleWithButton titleText="Friend’s Pack" buttonText="Learn to pack" onClick={onLearnCard} />
      <div>
        {!isMounting ? (
          <>
            <Search
              disabled={isLoading}
              searchValue={paramsCard.cardQuestion}
              error={errorSearchValue}
              onChangeDebounceValue={onSearch}
            />
            <ButtonResetFilter onResetFilter={onResetFilter} disable={isLoading} />
            <TableCard headData={TABLET_HEADER} />
            <Pagination
              disabled={isLoading}
              showQuickJumper
              current={currentPage}
              pageSize={initialStateCardParams.pageCount}
              total={totalCard}
              onChange={onchangePagination}
            />
          </>
        ) : null}
      </div>
    </>
  )
}
