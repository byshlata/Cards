import React, { ChangeEvent, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

//import { userName } from '../../store/selectors/selectors'
import { useAppDispatch } from '../../hooks'
import { RootStoreType, selectorIsLoading, selectorsIsInitialized } from '../../store'
import { userName } from '../../store/selectors/selectors'
import { changeProfileName } from '../../store/slice/profileSlice'
import { fetchProlePage } from '../../store/slice/profileSlice'

import style from './Profile.module.sass'

import { itIncubatorLogo, avatar, exitArrow, camera, pencil, logout } from './index'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const userName = useSelector<RootStoreType, string>((state) => state.profile.name)
  const userEmail = useSelector<RootStoreType, string>((state) => state.profile.email)

  useEffect(() => {
    dispatch(fetchProlePage())
  }, [])
  const [mode, setMode] = useState<boolean>(false)

  const [value, setValue] = useState<string>(userName)
  console.log({ value: value })
  const NameChanger = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const asyncChangeName = () => {
    dispatch(changeProfileName(value))
    setMode(false)
  }

  if (!selectorsIsInitialized) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className={style.pageWrapper}>
      <div className={style.pageHeader}>
        <div className={style.logo}>
          <img src={itIncubatorLogo} alt={'logo'} />
        </div>
        <div className={style.info}>
          <div className={style.infoName}>{value}</div>
          <div className={style.infoAvatar}>
            <img src={avatar} alt={'avatar miniature picture'} />
          </div>
        </div>
      </div>
      <div className={style.exitArrow}>
        <NavLink to={'/'}>
          <img src={exitArrow} alt={'arrow to exit'} />
          <p>Back to Packs List</p>
        </NavLink>
      </div>
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
                  dispatch(changeProfileName(value))
                }}
              />
            </>
          )}
        </div>
        <div className={style.profileEmail}>
          <h4>{userEmail}</h4>
        </div>
        <div className={style.buttonLogout}>
          <NavLink to={'/login'}>
            <img src={logout} alt={'log out'} />
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  )
}
