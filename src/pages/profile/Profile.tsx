import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import logout from '../../assets/image/logout.png'
import { Grade } from '../../components/grade/Grade'
import { TableGrade } from '../../components/table/tableGrade/TableGrade'

import style from './Profile.module.sass'
import { UserName } from './UserName'

import { AvatarUser, ButtonBack, FormBody, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { selectorUserEmail, logoutUser, selectorUserId } from 'store'

export const Profile = () => {
  const dispatch = useAppDispatch()

  const userEmail = useSelector(selectorUserEmail)
  const realUserId = useSelector(selectorUserId)

  const navigate = useNavigate()

  const params = useParams<'id'>()

  useEffect(() => {
    if (params.id !== realUserId) {
      navigate(`${Path.Other}`)
    }
  }, [])

  const logoutHandle = () => {
    dispatch(logoutUser())
  }

  return (
    <>
      <div className={style.exitArrow}>
        <div className={style.buttonBackPacksWrapper}>
          <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
        </div>
      </div>

      <FormBody width={415} height={410}>
        <Title text="Personal Information" />

        <AvatarUser />
        <UserName />
        <div className={style.profileEmail}>
          <h4>{userEmail}</h4>
        </div>
        <div className={style.buttonLogout} onClick={logoutHandle}>
          <img src={logout} alt={'log out'} />
          Log Out
        </div>
        {/*<TableGrade rating={4.5} />*/}
        {/*<TableGrade rating={4.3} />*/}
        {/*<TableGrade rating={1.0} />*/}
        <Grade rating={1.1} />
        <Grade rating={2.8} />
        <Grade rating={3.0} />
        <Grade rating={4.8} />
      </FormBody>
    </>
  )
}
