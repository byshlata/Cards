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
import { BasicContentCardPage } from 'pages/cardsPack/components/basicContentCardPage/BasicContentCardPage'
import { TABLET_HEADER_AUTH_USER } from 'pages/cardsPackAuthUser/optionHeaderTableAuthUser/optionTableAuthUser'
import { EmptyPack } from 'pages/emptyPack/EmptyPack'
import { useSelector } from 'react-redux'
import { selectorIsCloseModal, setDataForFormModalCard } from 'store'
import { BackValueType } from 'types'
import {useNavigate} from "react-router-dom";
import {Path} from "../../enums";

type CardsPackAuthUserType = {
  countCard: number
  titlePack: string
  idPack: string | undefined
}

export const CardsPackAuthUser = ({ countCard, titlePack, idPack }: CardsPackAuthUserType) => {
  const dispatch = useAppDispatch()

  const isCloseModal = useSelector(selectorIsCloseModal)

  const [isOpenModalPack, onOpenModalPack, onCloseModalPack] = useModal()
  const [isOpenModalCard, onOpenModalCard, onCloseModalCard] = useModal()

  const [actionMenu, setActionMenu] = useState<BackValueType>('')

  const navigate = useNavigate()

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

  const onAddCards = () => {}

  const deletePack = () => {
    setActionMenu('delete')
  }

  const editPack = () => {
    setActionMenu('edit')
  }

  const learnPack = () => {
    navigate(`${Path.Learn}`)
  }

  const onClickActionTable = (idCard: string, question: string, backValue: BackValueType) => {
    switch (backValue) {
      case 'edit':
      case 'delete':
        onOpenModalCard()
        dispatch(
          setDataForFormModalCard({
            questionCard: question,
            idCard: idCard,
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
          <Modal onClose={onCloseModalCard} isOpen={isOpenModalCard}>
            <FormModalCardsPackGrope onClose={onCloseModalCard} isOpenModal={isOpenModalCard} />
          </Modal>
          <Modal onClose={onCloseModalPack} isOpen={isOpenModalPack}>
            <FormModalPackListGrope
              onClose={onCloseModalPack}
              isOpenModal={isOpenModalPack}
              packId={idPack || ''}
              packName={titlePack}
              modalAction={actionMenu}
            />
          </Modal>
        </>
      ) : (
        <EmptyPack />
      )}
    </>
  )
}
