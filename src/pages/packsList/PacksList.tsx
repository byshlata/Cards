import React, { useEffect } from 'react'
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
  selectorIsCloseModalAfterRequest,
  selectorIsLoading,
  selectorIsMounting,
  selectorParams,
  selectorTotalCount,
  setDataForFormModalPack,
  setIsFirstOpenPage,
  setPackParams,
} from 'store'
import { BackValueType } from 'types'

import { TABLET_HEADER } from './optionHeaderTable/optionHeaderTable'
import style from './РacksList.module.sass'

export const PacksList = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const totalPack = useSelector(selectorTotalCount)
  const currentPage = useSelector(selectorCurrentPage)
  const params = useSelector(selectorParams)
  const isMounting = useSelector(selectorIsMounting)
  const isCloseModalAfterRequest = useSelector(selectorIsCloseModalAfterRequest)

  const navigate = useNavigate()

  const { isOpenModal, onOpenModal, onCloseModal } = useModal()

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
    if (isOpenModal && isCloseModalAfterRequest) {
      onCloseModal()
    }
  }, [isCloseModalAfterRequest])

  const onChangePagination = (page: number, pageSize: number) => {
    dispatch(setPackParams({ page: page, pageCount: pageSize }))
  }

  const onOpenModalAddPack = () => {
    onOpenModal()
    dispatch(setDataForFormModalPack({ action: 'add' }))
  }

  const onClickTableAction = (
    idPack: string,
    backValue: BackValueType,
    cardsCount: number,
    userId: string,
    name: string
  ) => {
    switch (backValue) {
      case 'edit':
      case 'delete':
        onOpenModal()
        dispatch(
          setDataForFormModalPack({
            namePack: name,
            idPack: idPack,
            cardsCountPack: cardsCount,
            action: backValue,
            userId: userId,
          })
        )
        break
      case 'learn':
        break
      case 'name':
        dispatch(
          setDataForFormModalPack({
            namePack: name,
            idPack: idPack,
            cardsCountPack: cardsCount,
            action: backValue,
            userId: userId,
          })
        )
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
        <FormModalPackListGrope onClose={onCloseModal} isOpenModal={isOpenModal} />
      </Modal>
    </div>
  )
}
