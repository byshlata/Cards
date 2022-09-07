import React, { useEffect } from 'react'

import { ButtonBack, MenuUserPack, TitleWithButton } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import {
  BasicContentCardPage,
  TABLET_HEADER_ALL_USER,
  TABLET_HEADER_AUTH_USER,
} from 'pages/userPack'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectorAuthUserId, selectorTitlePack, setCardParams } from 'store'
import { BackValueType } from 'types'

export const UserPack = () => {
  const dispatch = useAppDispatch()

  const titlePack = useSelector(selectorTitlePack)
  const authUserId = useSelector(selectorAuthUserId)

  const param = useParams<'id'>()

  const user_id = param.id
  useEffect(() => {
    dispatch(setCardParams({ cardsPack_id: user_id }))
  }, [])

  const onAddNewCard = () => {}

  const onLearnCard = () => {}

  const onClickActionTable = (idCard: string, backValue: BackValueType) => {}

  const isAuthUser = authUserId === user_id
  const tableHeadData = isAuthUser ? TABLET_HEADER_AUTH_USER : TABLET_HEADER_ALL_USER

  return (
    <>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      {isAuthUser ? (
        <>
          <TitleWithButton titleText={titlePack} buttonText="Add new card" onClick={onAddNewCard}>
            <MenuUserPack />
          </TitleWithButton>
        </>
      ) : (
        <>
          <TitleWithButton titleText={titlePack} buttonText="Learn to pack" onClick={onLearnCard} />
        </>
      )}
      <BasicContentCardPage tableHeadData={tableHeadData} onClickActionTable={onClickActionTable} />
    </>
  )
}
