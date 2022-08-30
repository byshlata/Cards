import React, { useLayoutEffect } from 'react'
import 'antd/dist/antd.css'

import { Pagination } from 'antd'
import {
  ButtonChoiceGrope,
  ButtonResetFilter,
  CustomSlider,
  FilterElementContainer,
  Search,
  TitleWithButton,
  Table,
} from 'components'
import { TableHeadElementType, TabletHeadType } from 'components/table/Table'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import {
  getPackData,
  initialStatePackParams,
  removeIsFirstOpenPage,
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
  { title: 'Search', element: <Search /> },
  { title: 'Show packs cards', element: <ButtonChoiceGrope /> },
  { title: 'Number of cards', element: <CustomSlider /> },
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
    title: 'Last Updated',
    sortParam: 'updated',
    stateSortElement: 'off',
  },
]

export const Pack = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const isFirstOpenPage = useSelector(selectorIsFirsOpen)
  const totalPack = useSelector(selectorTotalCount)

  const params = useSelector(selectorParams)

  useLayoutEffect(() => {
    if (isFirstOpenPage) {
      dispatch(getPackData(params))
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
          defaultCurrent={1}
          pageSize={initialStatePackParams.pageCount}
          total={totalPack}
          onChange={onchangePagination}
        />
      </div>
    </div>
  )
}
