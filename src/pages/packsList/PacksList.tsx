import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'

import { Pagination } from 'antd'
import {
  FilterContainer,
  FormModalPackListGrope,
  Modal,
  TablePackList,
  TitleWithButton,
} from 'components'
import { useModal } from 'components/modal/hooks/useModal'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useCustomSearchParams } from 'hooks/useCustomSearchParams'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getPackData,
  mountingComponent,
  removePackData,
  removePackParams,
  selectorCurrentPage,
  selectorIsCloseModal,
  selectorIsLoading,
  selectorIsMounting,
  selectorParams,
  selectorTotalCount,
  setPackParams,
} from 'store'
import { BackValueType, PackParamsInitialType } from 'types'

import { TABLET_HEADER } from './optionHeaderTable/optionHeaderTable'
import style from './РacksList.module.sass'

const initialStateURLPackParams = {
  user_id: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 10,
  sortPacks: '',
  packName: '',
}

type ModalPackDataType = {
  packName: string
  packId: string
  action: BackValueType
}
export const PacksList = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const totalPack = useSelector(selectorTotalCount)
  const currentPage = useSelector(selectorCurrentPage)
  const isMounting = useSelector(selectorIsMounting)
  const isCloseModalPackAfterRequest = useSelector(selectorIsCloseModal)

  const [modalPackData, setModalPackData] = useState<ModalPackDataType>({
    packName: '',
    packId: '',
    action: '',
  })

  const navigate = useNavigate()

  const [isOpenModal, onOpenModal, onCloseModal] = useModal()

  const { searchParams, params, setURLParams, resetURLParams } =
    useCustomSearchParams<PackParamsInitialType>(initialStateURLPackParams)

  useEffect(() => {
    if (Object.keys(Object.fromEntries(searchParams)).length) {
      dispatch(getPackData(params))
    }
  }, [searchParams])

  useEffect(() => {
    return () => {
      dispatch(removePackData())
    }
  }, [])

  useEffect(() => {
    if (isOpenModal && isCloseModalPackAfterRequest) {
      onCloseModal()
    }
  }, [isCloseModalPackAfterRequest])

  const onSearch = (searchValue: string) => {
    setURLParams({ packName: searchValue })
  }

  const onClickButtonChoiceGrope = (value: string) => {
    setURLParams({ user_id: value })
  }

  const onChangeValueSlider = (max: number, min: number) => {
    setURLParams({ max: max, min: min })
  }

  const onResetFilter = () => {
    resetURLParams()
  }

  const onChangePagination = (page: number, pageSize: number) => {
    setURLParams({ page: page, pageCount: pageSize })
  }

  const onSortValue = (sortValue: string) => {
    setURLParams({ sortPacks: sortValue })
  }

  const onOpenModalAddPack = () => {
    onOpenModal()
    setModalPackData({ packId: '', packName: '', action: 'add' })
  }

  const onClickTableAction = (idPack: string, backValue: BackValueType, namePack: string) => {
    switch (backValue) {
      case 'edit':
      case 'delete':
        onOpenModal()

        setModalPackData({
          packId: idPack,
          action: backValue,
          packName: namePack,
        })

        break
      case 'learn':
        //navigate(`${Path.Learn}${Path.Root}${idPack}`)
        break
      case 'name':
        navigate(`${Path.Pack}${Path.Root}${idPack}`)
        break
    }
  }

  return (
    <div className={style.packWrapper}>
      <TitleWithButton
        titleText="PacksList list"
        buttonText="Add new pack"
        onClick={onOpenModalAddPack}
      />

      {!isMounting ? (
        <>
          <div className={style.filterElementWrapper}>
            <FilterContainer
              disabled={isLoading}
              onResetFilter={onResetFilter}
              onChangeValueSlider={onChangeValueSlider}
              onClickButtonChoiceGrope={onClickButtonChoiceGrope}
              onSearchName={onSearch}
              searchName={params.packName}
              sliderMax={params.max}
              sliderMin={params.min}
              userId={params.user_id}
            />
          </div>
          <TablePackList
            headData={TABLET_HEADER}
            sortParams={params.sortPacks}
            onClickTableAction={onClickTableAction}
            onSortValue={onSortValue}
          />
          <div className={style.paginationWrapper}>
            <Pagination
              disabled={isLoading}
              showQuickJumper
              defaultCurrent={params.pageCount}
              current={params.page}
              total={totalPack}
              onChange={onChangePagination}
            />
          </div>
        </>
      ) : null}

      <Modal onClose={onCloseModal} isOpen={isOpenModal}>
        <FormModalPackListGrope
          onClose={onCloseModal}
          isOpenModal={isOpenModal}
          packId={modalPackData.packId}
          action={modalPackData.action}
          packName={modalPackData.packName}
        />
      </Modal>
    </div>
  )
}
