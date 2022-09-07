import React, { ChangeEvent, useEffect, useState } from 'react'

import { AvatarUser, ButtonBack, CustomButton, FormBody, IconLogoutSvg, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  changeProfileName,
  logoutUser,
  selectorUserEmail,
  selectorAuthUserId,
  selectorUserName,
} from 'store'

import pencil from '../../assets/image/pencil.png'

import style from './Profile.module.sass'

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

  const [mode, setMode] = useState<boolean>(false)

  const [value, setValue] = useState<string>(userName)

  const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const logoutHandle = () => {
    dispatch(logoutUser())
  }
  const asyncChangeName = () => {
    dispatch(changeProfileName(value))
    setMode(false)
  }

  return (
    <>
      <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
      <FormBody width={415} height={410}>
        <Title text="Personal Information" />

        <AvatarUser />
        <UserName />
        <div className={style.profileEmail}>
          <h4>{userEmail}</h4>
        </div>
        <div className={style.buttonLogout} onClick={logoutHandle}>
          <CustomButton color="secondary">
            <IconLogoutSvg />
            Log Out
          </CustomButton>
        </div>
        <Grade rating={1.1} />
        <Grade rating={2.8} />
        <Grade rating={3.0} />
        <Grade rating={4.8} />
      </FormBody>
      <EmptyPack />
    </>
  )
}
