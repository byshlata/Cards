import React, { useEffect } from 'react'

import { ButtonBack } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { AllUserCard } from 'pages/userCard/allUserCard/AllUserCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectorUserId, setCardParams } from 'store'
import { TableHeadElementType } from 'types'

const TABLET_HEADER_ALL_USER: TableHeadElementType[] = [
  {
    title: 'Question',
    sortParam: 'question',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Answer',
    sortParam: 'answer',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Last updated',
    sortParam: 'updated',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Create by',
    sortParam: 'user_name',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Grad',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
]

const TABLET_HEADER_AUTH_USER: TableHeadElementType[] = [
  {
    title: 'Question',
    sortParam: 'question',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Answer',
    sortParam: 'answer',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Last updated',
    sortParam: 'updated',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Create by',
    sortParam: 'user_name',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Grad',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
  {
    title: 'Action',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
]

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
        <AllUserCard tableHeadData={tableHeadData} />
      )}
    </>
  )
}
