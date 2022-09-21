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
  initialStatePackParams,
  removePackData,
  selectorCountPagePack,
  selectorCurrentPagePack,
  selectorIsCloseModal,
  selectorIsLoading,
  selectorTotalCountPagePack,
  setPackParams,
} from 'store'
import { BackValueType, PackParamsType } from 'types'

import { TABLET_HEADER_PACK_LIST } from './optionHeaderTable/optionHeaderTable'
import style from './РacksList.module.sass'

type ModalPackDataType = {
  packName: string
  packId: string
  action: BackValueType
}

export const PacksList = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const totalPack = useSelector(selectorTotalCountPagePack)
  const currentPagePack = useSelector(selectorCurrentPagePack)
  const countPagePack = useSelector(selectorCountPagePack)
  const isCloseModalPackAfterRequest = useSelector(selectorIsCloseModal)

  const [tableHeadData, setTableHeadData] = useState(TABLET_HEADER_PACK_LIST)

  const [modalPackData, setModalPackData] = useState<ModalPackDataType>({
    packName: '',
    packId: '',
    action: '',
  })

  const navigate = useNavigate()

  const [isOpenModal, onOpenModal, onCloseModal] = useModal()

  const { searchParams, paramsURL, setURLParams, resetURLParams } =
    useCustomSearchParams<PackParamsType>(initialStatePackParams)

  useEffect(() => {
    if (Object.keys(Object.fromEntries(searchParams)).length) {
      dispatch(setPackParams(paramsURL))
      dispatch(getPackData(paramsURL))
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

  const onChangeSlider = (max: number, min: number) => {
    setURLParams({ max: max, min: min })
  }

  const onResetFilter = () => {
    setTableHeadData(TABLET_HEADER_PACK_LIST)
    resetURLParams()
  }

  const onChangePagination = (page: number, pageSize: number) => {
    setURLParams({ page: page, pageCount: pageSize })
  }

  const onSortColumn = (sortValue: string) => {
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

      <div className={style.filterElementWrapper}>
        <FilterContainer
          disabled={isLoading}
          onResetFilter={onResetFilter}
          onChangeSlider={onChangeSlider}
          onClickButtonChoiceGrope={onClickButtonChoiceGrope}
          onSearchName={onSearch}
        />
      </div>
      <TablePackList
        headTableData={tableHeadData}
        sortParams={paramsURL.sortPacks}
        onClickTableAction={onClickTableAction}
        onSortColumn={onSortColumn}
      />
      <div className={style.paginationWrapper}>
        <Pagination
          disabled={isLoading}
          showQuickJumper
          defaultCurrent={countPagePack}
          current={currentPagePack}
          total={totalPack}
          onChange={onChangePagination}
        />
      </div>

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
