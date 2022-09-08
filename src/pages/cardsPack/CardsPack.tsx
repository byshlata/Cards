import React, { useEffect } from 'react'

import { ButtonBack } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { CarsPackAllUser } from 'pages/cardsPackAllUser/CarsPackAllUser'
import { CardsPackAuthUser } from 'pages/cardsPackAuthUser/CardsPackAuthUser'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  selectorAuthUserId,
  selectorCardsCountPack,
  selectorTitlePack,
  selectorUserId,
  setCardParams,
} from 'store'
import { BackValueType } from 'types'

export const CardsPack = () => {
  const dispatch = useAppDispatch()

  const titlePack = useSelector(selectorTitlePack)
  const countCard = useSelector(selectorCardsCountPack)
  const authUserId = useSelector(selectorAuthUserId)
  const userId = useSelector(selectorUserId)

  const param = useParams<'id'>()

  const idPack = param.id

  useEffect(() => {
    dispatch(setCardParams({ cardsPack_id: idPack }))
  }, [])

  const onAddNewCard = () => {}

  const onLearnCard = () => {}

  const onClickActionTable = (idCard: string, backValue: BackValueType) => {}

  const isAuthUser = authUserId === userId

  return (
    <>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      {isAuthUser ? (
        <CardsPackAuthUser countCard={countCard} titlePack={titlePack} idPack={idPack} />
      ) : (
        <CarsPackAllUser titlePack={titlePack} idPack={idPack} />
      )}
    </>
  )
}
