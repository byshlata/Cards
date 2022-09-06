import React, { useEffect } from 'react'

import { Pagination } from 'antd'
import { ButtonResetFilter, Search, TableCard } from 'components'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  getCardData,
  initialStateCardParams,
  mountingComponent,
  removeIsFirstOpenCardPage,
  resetCardParams,
  selectorCurrentPageCard,
  selectorIsLoading,
  selectorIsMounting,
  selectorParamsCard,
  selectorTotalCountCard,
  setCardParams,
  setIsFirstOpenCardPage,
  unmountingComponent,
} from 'store'
import { BackValueType, TableHeadElementType } from 'types'

import style from './BasicContentCardPage.module.sass'

type BasicContentCardPageType = {
  tableHeadData: TableHeadElementType[]
  onClickActionTable?: (idCard: string, backValue: BackValueType) => void
}

export const BasicContentCardPage = ({
  tableHeadData,
  onClickActionTable,
}: BasicContentCardPageType) => {
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

  return (
    <>
      <div>
        {!isMounting ? (
          <>
            <div className={style.filterWrapper}>
              <Search
                disabled={isLoading}
                searchValue={paramsCard.cardQuestion}
                error={errorSearchValue}
                onChangeDebounceValue={onSearch}
              />
              <ButtonResetFilter onResetFilter={onResetFilter} disabled={isLoading} />
            </div>
            <TableCard heardTableData={tableHeadData} onClickActionTable={onClickActionTable} />
            <Pagination
              disabled={isLoading}
              showQuickJumper
              current={currentPage}
              total={totalCard}
              onChange={onchangePagination}
            />
          </>
        ) : null}
      </div>
    </>
  )
}
