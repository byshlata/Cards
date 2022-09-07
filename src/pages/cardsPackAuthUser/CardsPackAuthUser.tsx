import React from 'react'
import { MenuUserPack, TitleWithButton } from 'components'
import { BasicContentCardPage } from 'pages/cardsPack'
import { EmptyPack } from 'pages/emptyPack/EmptyPack'
import { TABLET_HEADER_AUTH_USER } from 'pages/cardsPackAuthUser/optionHeaderTableAuthUser/optionTableAuthUser'
import { BackValueType } from 'types'
import { useAppDispatch } from 'hooks'

type CardsPackAuthUserType = {
  countCard: number
  titlePack: string
  idPack: string | undefined
}

export const CardsPackAuthUser = ({ countCard, titlePack, idPack }: CardsPackAuthUserType) => {
  const dispatch = useAppDispatch()

  const onAddCards = () => {}

  const deletePack = () => {}

  const editPack = () => {}

  const learnPack = () => {}

  const onClickActionTable = (idCard: string, backValue: BackValueType) => {}

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
        <EmptyPack />
      )}
    </>
  )
}
