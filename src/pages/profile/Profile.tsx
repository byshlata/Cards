import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import common from './../../assets/style/container.module.sass'
import style from './Profile.module.sass'

import {
  AvatarUser,
  ButtonBack,
  ChangeLogin,
  CustomButton,
  FormBody,
  IconLogoutSvg,
  Title,
} from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import {
  changeProfileName,
  logoutUser,
  selectorAuthUserId,
  selectorUserEmail,
  selectorUserName,
} from 'store'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const userName = useSelector(selectorUserName)
  const userEmail = useSelector(selectorUserEmail)
  const realUserId = useSelector(selectorAuthUserId)

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
  const changeName = (userLogin: string) => {
    dispatch(changeProfileName({ name: userLogin }))
  }

  return (
    <>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      <div className={common.container}>
        <div className={style.titleWrapper}>
          <Title text="Personal Information" />
        </div>
        <AvatarUser />
        <div className={style.changeProfileNameWrapper}>
          <ChangeLogin userLogin={userName} onChangeName={changeName} />
        </div>
        <div className={style.profileEmail}>
          <h4>{userEmail}</h4>
        </div>
        <div className={style.buttonLogout} onClick={logoutHandle}>
          <CustomButton color="secondary">
            <IconLogoutSvg />
            Log Out
          </CustomButton>
        </div>
      </div>
    </>
  )
}
