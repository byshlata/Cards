import React, { ChangeEvent, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Navigate, NavLink } from 'react-router-dom'
import { selectorIsAuth, selectorUserName } from 'store'

import { FormBody } from '../../components'
import { Path } from '../../enums'
import { useAppDispatch } from '../../hooks'

import style from './Profile.module.sass'

import {
  authData,
  avatar,
  camera,
  changeProfileName,
  exitArrow,
  fetchProfilePage,
  logout,
  logoutUser,
  pencil,
  testLogin,
} from './index'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const userName = useSelector(selectorUserName)
  const isAuth = useSelector(selectorIsAuth)
  //const userAvatar = useSelector<RootStoreType, string>((state) => state.profile.userAvatar)
  console.log('profile')

  const [mode, setMode] = useState<boolean>(false)

  const [value, setValue] = useState<string>(userName)

  const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const logoutHandle = () => {
    dispatch(logoutUser())
  }
  const asyncChangeName = () => {
    dispatch(changeProfileName({ userName: value, userAvatar: '' }))
    setMode(false)
  }
  const TestLogin = () => {
    dispatch(testLogin(authData))
  }

  return (
    <div className={style.pageWrapper}>
      <div className={style.exitArrow}>
        <NavLink to={'/'}>
          <img src={exitArrow} alt={'arrow to exit'} />
          <p>Back to Packs List</p>
        </NavLink>
      </div>
      <FormBody width={415} height={550}>
        <div className={style.profileContainer}>
          <h3 className={style.profileInformation}>Personal Information</h3>
          <div className={style.profileImage}>
            <img src={avatar} alt={'avatar picture'} />
            <NavLink to={'/'}>
              <div className={style.changeProfileImage}>
                <img src={camera} alt={'change avatar picture'} />
              </div>
            </NavLink>
          </div>
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
            <h4>yoyoyo@gmail.com</h4>
          </div>
          <div className={style.buttonLogout} onClick={logoutHandle}>
            <img src={logout} alt={'log out'} />
            Log Out
          </div>
        </div>
        <div onClick={TestLogin}>Auth</div>
      </FormBody>
    </div>
  )
}
