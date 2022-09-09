import React, { useEffect, useState } from 'react'

import {
  FormModalCardsPackGrope,
  FormModalPackListGrope,
  MenuUserPack,
  Modal,
  TitleWithButton,
} from 'components'
import { useModal } from 'components/modal/hooks/useModal'
import { useAppDispatch } from 'hooks'
import { EmptyPack } from 'pages'
import { BasicContentCardPage } from 'pages/cardsPack/components/basicContentCardPage/BasicContentCardPage'
import { useSelector } from 'react-redux'
import { selectorIsCloseModal } from 'store'
import { BackValueType } from 'types'

import { TABLET_HEADER_AUTH_USER } from './optionHeaderTableAuthUser/optionTableAuthUser'

type CardsPackAuthUserType = {
  countCard: number
  titlePack: string
  idPack: string | undefined
}

type CardDataModalType = {
  idCard: string
  idPack?: string
  question: string
  answer: string
  action: BackValueType
}

export const CardsPackAuthUser = ({ countCard, titlePack, idPack }: CardsPackAuthUserType) => {
  const dispatch = useAppDispatch()

  const isCloseModal = useSelector(selectorIsCloseModal)

  const [isOpenModalPack, onOpenModalPack, onCloseModalPack] = useModal()
  const [isOpenModalCard, onOpenModalCard, onCloseModalCard] = useModal()

  const [actionMenu, setActionMenu] = useState<BackValueType>('')
  const [cardDataModal, setCardDataModal] = useState<CardDataModalType>({
    idCard: '',
    idPack: '',
    question: '',
    answer: '',
    action: '',
  })

  useEffect(() => {
    if (isOpenModalPack && isCloseModal) {
      onCloseModalPack()
    }
  }, [isCloseModal])

  useEffect(() => {
    if (isOpenModalCard && isCloseModal) {
      onCloseModalCard()
    }
  }, [isCloseModal])

  const onAddCards = () => {
    onOpenModalCard()
    setCardDataModal({ idCard: '', idPack: idPack, question: '', answer: '', action: 'add' })
  }

  const deletePack = () => {
    // onOpenModalPack()
    // setActionMenu('delete')
  }

  const editPack = () => {
    onOpenModalPack()
    setActionMenu('edit')
  }

  const learnPack = () => {}

  const onClickActionTable = (
    idCard: string,
    question: string,
    answer: string,
    action: BackValueType
  ) => {
    switch (action) {
      case 'edit':
      case 'delete':
        onOpenModalCard()
        setCardDataModal({ idCard, idPack, action, question, answer })
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
        </>
      ) : (
        <EmptyPack onClickAddCard={onAddCards} />
      )}
      <Modal onClose={onCloseModalCard} isOpen={isOpenModalCard}>
        <FormModalCardsPackGrope
          onClose={onCloseModalCard}
          isOpenModal={isOpenModalCard}
          idPack={idPack || ''}
          idCard={cardDataModal.idCard}
          answer={cardDataModal.answer}
          question={cardDataModal.question}
          action={cardDataModal.action}
        />
      </Modal>
      <Modal onClose={onCloseModalPack} isOpen={isOpenModalPack}>
        <FormModalPackListGrope
          onClose={onCloseModalPack}
          isOpenModal={isOpenModalPack}
          packId={idPack || ''}
          packName={titlePack}
          action={actionMenu}
        />
      </Modal>
    </>
  )
}
