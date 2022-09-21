import React, { useEffect, useState } from 'react'

import {
  FormModalCardsPackGrope,
  FormModalPackListGrope,
  MenuUserPack,
  Modal,
  TitleWithButton,
} from 'components'
import { useModal } from 'components/modal/hooks/useModal'
import { Path } from 'enums'
import { EmptyPack } from 'pages'
import { BasicContentCardPage } from 'pages/cardsPack/components/basicContentCardPage/BasicContentCardPage'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  selectorCardsTotalCount,
  selectorIsCloseModal,
  selectorIsLoading,
  selectorSortCards,
  selectorCardQuestion,
} from 'store'
import { BackValueType } from 'types'

import { TABLET_HEADER_AUTH_USER } from './optionHeaderTableAuthUser/optionTableAuthUser'

type CardsPackAuthUserType = {
  titlePack: string
  idPack: string | undefined
  onSortColumn: (searchValue: string) => void
  onChangePagination: (page: number, pageSize: number) => void
  onSearchByQuestion: (searchValue: string) => void
  onResetFilter: () => void
}

type CardDataStateType = {
  idCard: string
  idPack?: string
  question: string
  answer: string
  action: BackValueType
}

export const CardsPackAuthUser = ({
  idPack,
  titlePack,
  onSearchByQuestion,
  onChangePagination,
  onResetFilter,
  onSortColumn,
}: CardsPackAuthUserType) => {
  const isCloseModal = useSelector(selectorIsCloseModal)
  const countCardInPack = useSelector(selectorCardsTotalCount)
  const disabled = useSelector(selectorIsLoading)
  const searchCardQuestion = useSelector(selectorCardQuestion)
  const sortParam = useSelector(selectorSortCards)

  const [isOpenModalPack, onOpenModalPack, onCloseModalPack] = useModal()
  const [isOpenModalCard, onOpenModalCard, onCloseModalCard] = useModal()

  const [actionMenu, setActionMenu] = useState<BackValueType>('')
  const [cardDataModal, setCardDataModal] = useState<CardDataStateType>({
    idCard: '',
    idPack: '',
    question: '',
    answer: '',
    action: '',
  })

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

  const onAddCards = () => {
    onOpenModalCard()
    setCardDataModal({ idCard: '', idPack: idPack, question: '', answer: '', action: 'add' })
  }

  const deletePack = () => {
    onOpenModalPack()
    setActionMenu('delete')
  }

  const editPack = () => {
    onOpenModalPack()
    setActionMenu('edit')
  }

  const learnPack = () => {
    navigate(`${Path.Root}${Path.Learn}`)
  }

  const navigateTo = () => {
    navigate(`${Path.PacksList}`)
  }

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
      {countCardInPack ? (
        <>
          <TitleWithButton titleText={titlePack} buttonText="Add new card" onClick={onAddCards}>
            <MenuUserPack deletePack={deletePack} editPack={editPack} learnPack={learnPack} />
          </TitleWithButton>
          <BasicContentCardPage
            tableHeadData={TABLET_HEADER_AUTH_USER}
            disabled={disabled}
            searchCardQuestion={searchCardQuestion}
            sortParam={sortParam}
            onResetFilter={onResetFilter}
            onChangePagination={onChangePagination}
            onSearchByQuestion={onSearchByQuestion}
            onClickActionTable={onClickActionTable}
            onSortColumn={onSortColumn}
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
          navigateTo={navigateTo}
        />
      </Modal>
    </>
  )
}
