import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser, selectorIsAuth, selectorIsLoading, selectorUserName } from 'store'

import avatar from '../../assets/image/avatar.png'
import itIncubatorLogo from '../../assets/image/itIncubatorLogo.png'
import logout from '../../assets/image/logout.png'
import user from '../../assets/image/user.png'
import { Path } from '../../enums'
import { useAppDispatch } from '../../hooks'
import styleMain from '../../styles/container.module.sass'
import { CustomButton } from '../button'

import style from './Header.module.sass'

export const Header = () => {
  const isAuth = useSelector(selectorIsAuth)
  return (
    <>
      <header className={style.header}>
        <div className={styleMain.wrapper}>
          <div className={style.logo}>
            <img src={itIncubatorLogo} alt={'logo'} />
          </div>
          <div>{!isAuth ? <HeaderAuthButton /> : <HeaderUserInfo />}</div>
        </div>
      </header>
    </>
  )
}

export const HeaderAuthButton = () => {
  const isLoading = useSelector(selectorIsLoading)
  return (
    <div className={styleMain.headerButton}>
      <CustomButton type="submit" color="primary" disabled={isLoading}>
        Sign In
      </CustomButton>
    </div>
  )
}

export const HeaderUserInfo = () => {
  const userName = useSelector(selectorUserName)

  const [isActive, setIsActive] = useState<boolean>(false)

  const activeUserInfoMenuHandler = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      <div className={style.info} onClick={activeUserInfoMenuHandler}>
        <div className={style.infoName}>{userName}</div>
        <div></div>
        <div className={style.infoAvatar}>
          <img src={avatar} alt={'avatar miniature picture'} />
        </div>
      </div>
      {isActive && <HeaderUserInfoMenu />}
    </>
  )
}

export const HeaderUserInfoMenu = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const profileHandle = () => {
    navigate(`${Path.Root}`)
  }

  const logoutHandle = () => {
    dispatch(logoutUser())
    navigate(`${Path.Login}`)
  }
  return (
    <div className={style.menuContainer}>
      <div className={style.menuContainerArrow}></div>
      <div className={style.menuProfile} onClick={profileHandle}>
        <img src={user} alt={'profile'} />
        Profile
      </div>
      <div className={style.menuLogOut} onClick={logoutHandle}>
        <img src={logout} alt={'log out'} />
        Log Out
      </div>
    </div>
  )
}
