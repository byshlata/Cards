import React from 'react'

import { FormModalCardsPackGrope, MenuUserPack, Modal, TitleWithButton } from 'components'
import { useModal } from 'components/modal/hooks/useModal'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { BasicContentCardPage } from 'pages/cardsPack/components/basicContentCardPage/BasicContentCardPage'
import { TABLET_HEADER_AUTH_USER } from 'pages/cardsPackAuthUser/optionHeaderTableAuthUser/optionTableAuthUser'
import { EmptyPack } from 'pages/emptyPack/EmptyPack'
import { setDataForFormModal } from 'store'
import { setDataForFormModalPack } from 'store/slice/modalSlice'
import { BackValueType } from 'types'

type CardsPackAuthUserType = {
  countCard: number
  titlePack: string
  idPack: string | undefined
}

export const CardsPackAuthUser = ({ countCard, titlePack, idPack }: CardsPackAuthUserType) => {
  const dispatch = useAppDispatch()

  const { isOpenModal, onCloseModal, onOpenModal } = useModal()

  const onAddCards = () => {}

  const deletePack = () => {}

  const editPack = () => {}

  const learnPack = () => {}

  const onClickActionTable = (idCard: string, question: string, backValue: BackValueType) => {
    switch (backValue) {
      case 'edit':
      case 'delete':
        onOpenModal()
        dispatch(
          setDataForFormModalPack({
            namePack: question,
            id: idCard,
            action: backValue,
          })
        )
        break
      case 'learn':
        break
    }
  }

  return (
    <>
      {countCard ? (
        <>
          <TitleWithButton titleText={titlePack} buttonText="Add new card" onClick={onAddCards}>
            <MenuUserPack deletePack={deletePack} editPack={editPack} learnPack={learnPack} />
          </TitleWithButton>
          <BasicContentCardPage
            tableHeadData={TABLET_HEADER_AUTH_USER}
            onClickActionTable={onClickActionTable}
          />
          <Modal onClose={onCloseModal} isOpen={isOpenModal}>
            <FormModalCardsPackGrope onClose={onCloseModal} isOpenModal={isOpenModal} />
          </Modal>
        </>
      ) : (
        <EmptyPack />
      )}
    </>
  )
}
