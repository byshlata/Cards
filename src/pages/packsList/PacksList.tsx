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
  openCloseAddNewPackModal,
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

import { TABLET_HEADER } from './optionHeaderTable/optionHeaderTable'
import { AddPackModal } from '../../components/modal/addPack-modal/AddPack-modal'

import style from './РacksList.module.sass'

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
    dispatch(setPackParams({ pageCount: pageSize }))
  }

  const onSearch = (searchValuer: string) => {
    dispatch(setPackParams({ packName: searchValuer }))
  }

  const onResetFilter = () => {
    dispatch(unmountingComponent())
  }
  const onClickButton = () => {
    dispatch(openCloseAddNewPackModal(true))
  }

  const errorSearchValue = totalPack ? '' : 'Cards not found'

  return (
    <div className={style.packWrapper}>
      <TitleWithButton
        titleText="PacksList list"
        buttonText="Add new pack"
        onClick={onClickButton}
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
      <AddPackModal name={'Add new pack'} />
    </div>
  )
}
