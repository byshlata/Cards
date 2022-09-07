import React, { ChangeEvent, useEffect, useState } from 'react'

import { AvatarUser, ButtonBack, CustomButton, FormBody, IconLogoutSvg, Title } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  changeProfileName,
  logoutUser,
  selectorAuthUserId,
  selectorUserEmail,
  selectorUserName,
} from 'store'

import pencil from '../../assets/image/pencil.png'

import style from './Profile.module.sass'
import { Grade } from 'components/grade/Grade'
import { UserName } from './UserName'
import { EmptyPack } from 'pages/emptyPack/EmptyPack'

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
        <div className={style.changeProfileNameWrapper}>
          {mode ? (
            <input value={value} onChange={NameChanger} autoFocus onBlur={asyncChangeName} />
          ) : (
            <>
              <h3 className={style.profileName}>{value}</h3>

              <img
                src={pencil}
                alt={'change name'}
                onClick={() => {
                  setMode(true)
                }}
              />
            </>
          )}
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
      </FormBody>
    </>
  )
}
