import React, { useEffect } from 'react'

import { ButtonBack } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { AllUserCard } from 'pages/userCard/allUserCard/AllUserCard'
import { useParams } from 'react-router-dom'
import { setCardParams } from 'store'

export const UserPack = () => {
  const dispatch = useAppDispatch()

  const param = useParams<'id'>()
  useEffect(() => {
    dispatch(setCardParams({ cardsPack_id: param.id }))
  }, [])

  return (
    <div>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      <AllUserCard />
    </div>
  )
}
