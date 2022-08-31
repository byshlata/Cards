import React, { useLayoutEffect } from 'react'
import 'antd/dist/antd.css'

import { Pagination } from 'antd'
import {
  ButtonChoiceGrope,
  ButtonResetFilter,
  CustomSliderByPack,
  FilterElementContainer,
  Search,
  SearchByPack,
  Table,
  TitleWithButton,
} from 'components'
import { TableHeadElementType } from 'components/table/Table'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  getPackData,
  initialStatePackParams,
  removeIsFirstOpenPage,
  renderPageElement,
  selectorCurrentPage,
  selectorIsFirsOpen,
  selectorIsLoading,
  selectorParams,
  selectorTotalCount,
  setIsFirstOpenPage,
  setPackParams,
} from 'store'
import { FilterElementType } from 'types'

import style from './Pack.module.sass'

const FILTER_ELEMENT: FilterElementType[] = [
  { title: 'Search', element: <SearchByPack /> },
  { title: 'Show packs cards', element: <ButtonChoiceGrope /> },
  { title: 'Number of cards', element: <CustomSliderByPack /> },
  { title: '', element: <ButtonResetFilter /> },
]

const TABLET_HEADER: TableHeadElementType[] = [
  {
    title: 'Name',
    sortParam: 'name',
    stateSortElement: 'off',
  },
  {
    title: 'Cards',
    sortParam: 'cardsCount',
    stateSortElement: 'off',
  },
  {
    title: 'Last updated',
    sortParam: 'updated',
    stateSortElement: 'off',
  },
  {
    title: 'Create by',
    sortParam: 'user_name',
    stateSortElement: 'off',
  },
]

export const Pack = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const isFirstOpenPage = useSelector(selectorIsFirsOpen)
  const totalPack = useSelector(selectorTotalCount)
  const currentPage = useSelector(selectorCurrentPage)
  const params = useSelector(selectorParams)

  useLayoutEffect(() => {
    if (isFirstOpenPage && !params.isResetFilter) {
      console.log('isFirstOpenPage', isFirstOpenPage)
      console.log('!params.isResetFilter', !params.isResetFilter)
      console.log('params', params)
      dispatch(getPackData(params))
    }
    if (params.isResetFilter) {
      dispatch(renderPageElement())
    }
  }, [params])

  useLayoutEffect(() => {
    dispatch(setIsFirstOpenPage())
    return () => {
      dispatch(removeIsFirstOpenPage())
    }
  }, [])

  const onchangePagination = (page: number, pageSize: number) => {
    dispatch(setPackParams({ page: page }))
  }

  const onClockButton = () => {}

  return (
    <div className={style.packWrapper}>
      <TitleWithButton titleText="Pack list" buttonText="Add new pack" onClick={onClockButton} />
      {!params.isResetFilter && (
        <>
          <div className={style.filterElementWrapper}>
            {FILTER_ELEMENT.map(({ element, title }) => (
              <FilterElementContainer key={title} element={element} title={title} />
            ))}
          </div>
          <Table headData={TABLET_HEADER} />
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
      )}
    </div>
  )
}
