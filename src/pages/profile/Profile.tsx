import React, { ChangeEvent, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { useAppDispatch } from '../../hooks'
import { RootStoreType, selectorsIsInitialized } from '../../store'

import style from './Profile.module.sass'

import { authData, testLogin } from './index'
import { changeProfileName, fetchProfilePage } from './index'
import { avatar, exitArrow, camera, pencil, logout } from './index'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const userName = useSelector<RootStoreType, string>((state) => state.profile.userName)
  const userAvatar = useSelector<RootStoreType, string>((state) => state.profile.userAvatar)

  useEffect(() => {
    dispatch(fetchProfilePage())
  }, [])
  useEffect(() => {
    setValue(userName)
  }, [userName])

  const [mode, setMode] = useState<boolean>(false)

  const [value, setValue] = useState<string>(userName)

  const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const asyncChangeName = () => {
    dispatch(changeProfileName({ userName: value, userAvatar: '' }))
    setMode(false)
  }
  const TestLogin = () => {
    dispatch(testLogin(authData))
  }
  if (!selectorsIsInitialized) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className={style.pageWrapper}>
      <div className={style.exitArrow}>
        <NavLink to={'/'}>
          <img src={exitArrow} alt={'arrow to exit'} />
          <p>Back to Packs List</p>
        </NavLink>
      </div>
      {/*<FormBody width={415} height={550}>*/}
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
        <div className={style.buttonLogout}>
          <NavLink to={'/'}>
            <img src={logout} alt={'log out'} />
            Log Out
          </NavLink>
        </div>
      </div>
      <div onClick={TestLogin}>Auth</div>
      {/*</FormBody>*/}
    </div>
  )
}
