import React, { useEffect } from 'react'
import 'antd/dist/antd.css'

import { Pagination } from 'antd'
import {
  ButtonChoiceGrope,
  ButtonResetFilter,
  CustomSliderByPack,
  FilterElementContainer,
  Search,
  TablePackList,
  TitleWithButton,
} from 'components'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  getPackData,
  initialStatePackParams,
  mountingComponent,
  removeIsFirstOpenPage,
  resetPackParams,
  selectorCurrentPage,
  selectorIsLoading,
  selectorIsMounting,
  selectorParams,
  selectorTotalCount,
  setIsFirstOpenPage,
  setPackParams,
  unmountingComponent,
} from 'store'
import { TableHeadElementType } from 'types'

import style from './РacksList.module.sass'

const TABLET_HEADER: TableHeadElementType[] = [
  {
    title: 'Name',
    sortParam: 'name',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Cards',
    sortParam: 'cardsCount',
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
    title: 'Action',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
]

export const PacksList = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const totalPack = useSelector(selectorTotalCount)
  const currentPage = useSelector(selectorCurrentPage)
  const params = useSelector(selectorParams)
  const isMounting = useSelector(selectorIsMounting)

  useEffect(() => {
    if (params.isFirstOpen) {
      dispatch(getPackData(params))
    }
  }, [params])

  useEffect(() => {
    if (isMounting) {
      dispatch(resetPackParams())
      dispatch(mountingComponent())
    }
  }, [isMounting])

  useEffect(() => {
    dispatch(setIsFirstOpenPage())
    return () => {
      dispatch(removeIsFirstOpenPage())
    }
  }, [])

  const onchangePagination = (page: number, pageSize: number) => {
    dispatch(setPackParams({ page: page }))
  }

  const onSearch = (searchValuer: string) => {
    dispatch(setPackParams({ sortPacks: searchValuer }))
  }

  const onResetFilter = () => {
    dispatch(unmountingComponent())
  }

  const onClockButton = () => {}

  const errorSearchValue = totalPack ? '' : 'Cards not found'

  return (
    <div className={style.packWrapper}>
      <TitleWithButton
        titleText="PacksList list"
        buttonText="Add new pack"
        onClick={onClockButton}
      />
      {!isMounting ? (
        <>
          <div className={style.filterElementWrapper}>
            <FilterElementContainer title="Search">
              <Search
                searchValue={params.packName}
                onChangeDebounceValue={onSearch}
                disabled={isLoading}
                error={errorSearchValue}
              />
            </FilterElementContainer>
            <FilterElementContainer title="Show packs cards">
              <ButtonChoiceGrope />
            </FilterElementContainer>
            <FilterElementContainer title="Number of cards">
              <CustomSliderByPack />
            </FilterElementContainer>
            <FilterElementContainer>
              <ButtonResetFilter onResetFilter={onResetFilter} disable={isLoading} />
            </FilterElementContainer>
          </div>
          <TablePackList headData={TABLET_HEADER} />
          <div className={style.paginationWrapper}>
            <Pagination
              disabled={isLoading}
              showQuickJumper
              current={currentPage}
              pageSize={initialStatePackParams.pageCount}
              total={totalPack}
              onChange={onchangePagination}
            />
          </div>
        </>
      ) : null}
    </div>
  )
}
