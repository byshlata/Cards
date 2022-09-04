import React, { useEffect } from 'react'

import { ButtonBack } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import {
  AllUserCard,
  AuthUserCard,
  TABLET_HEADER_ALL_USER,
  TABLET_HEADER_AUTH_USER,
} from 'pages/userPack'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectorAuthUserId, setCardParams } from 'store'

export const UserPack = () => {
  const dispatch = useAppDispatch()

  const authUserId = useSelector(selectorAuthUserId)

  const param = useParams<'id'>()
  const user_id = param.id
  useEffect(() => {
    dispatch(setCardParams({ cardsPack_id: user_id }))
  }, [])

  const isAuthUser = authUserId === user_id

  const tableHeadData = isAuthUser ? TABLET_HEADER_AUTH_USER : TABLET_HEADER_ALL_USER

  return (
    <>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      {isAuthUser ? (
        <AuthUserCard tableHeadData={tableHeadData} />
      ) : (
        <AllUserCard tableHeadData={tableHeadData} />
      )}
    </>
  )
}
