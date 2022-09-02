import React, { useEffect } from 'react'

import { ButtonBack } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { AllUserCard } from 'pages/userCard/allUserCard/AllUserCard'
import { AuthUserCard } from 'pages/userCard/authUserCard/AuthUserCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectorUserId, setCardParams } from 'store'

import {
  TABLET_HEADER_ALL_USER,
  TABLET_HEADER_AUTH_USER,
} from './optionHeaderTable/optionTableHeader'

export const UserPack = () => {
  const dispatch = useAppDispatch()

  const AuthUserId = useSelector(selectorUserId)

  const param = useParams<'id'>()
  const user_id = param.id
  useEffect(() => {
    dispatch(setCardParams({ cardsPack_id: user_id }))
  }, [])

  const isAuthUser = AuthUserId === user_id

  const tableHeadData = isAuthUser ? TABLET_HEADER_AUTH_USER : TABLET_HEADER_ALL_USER

  return (
    <>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      {isAuthUser ? (
        <AllUserCard tableHeadData={tableHeadData} />
      ) : (
        <AuthUserCard tableHeadData={tableHeadData} />
      )}
    </>
  )
}
