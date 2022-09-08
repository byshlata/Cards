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
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getPackData,
  mountingComponent,
  removePackData,
  resetPackParams,
  selectorCurrentPage,
  selectorIsCloseModal,
  selectorIsLoading,
  selectorIsMounting,
  selectorParams,
  selectorTotalCount,
  setIsFirstOpenPage,
  setPackParams,
} from 'store'
import { BackValueType } from 'types'

import { TABLET_HEADER } from './optionHeaderTable/optionHeaderTable'
import style from './РacksList.module.sass'

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
  const params = useSelector(selectorParams)
  const isMounting = useSelector(selectorIsMounting)
  const isCloseModalPackAfterRequest = useSelector(selectorIsCloseModal)

  const [modalPackData, setModalPackData] = useState<ModalPackDataType>({
    packName: '',
    packId: '',
    action: '',
  })

  const navigate = useNavigate()

  const [isOpenModal, onOpenModal, onCloseModal] = useModal()

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
      dispatch(removePackData())
    }
  }, [])

  useEffect(() => {
    if (isOpenModal && isCloseModalPackAfterRequest) {
      onCloseModal()
    }
  }, [isCloseModalPackAfterRequest])

  const onChangePagination = (page: number, pageSize: number) => {
    dispatch(setPackParams({ page: page, pageCount: pageSize }))
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
            <FilterContainer />
          </div>
          <TablePackList headData={TABLET_HEADER} onClickTableAction={onClickTableAction} />
          <div className={style.paginationWrapper}>
            <Pagination
              disabled={isLoading}
              showQuickJumper
              current={currentPage}
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
          modalAction={modalPackData.action}
          packName={modalPackData.packName}
        />
      </Modal>
    </div>
  )
}
