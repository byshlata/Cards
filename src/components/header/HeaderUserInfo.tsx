import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import avatar from '../../assets/image/avatar.png'

import style from './UserInfo.module.sass'

import logout from 'assets/image/logout.png'
import user from 'assets/image/userButton.png'
import { InfoMenu } from 'components/header/InfoMenu'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { logoutUser, selectorUserName } from 'store'

export const HeaderUserInfo = () => {
  const userName = useSelector(selectorUserName)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isActive, setIsActive] = useState<boolean>(false)

  const activeUserInfoMenuHandler = () => {
    setIsActive(!isActive)
  }

  const profileHandle = () => {
    navigate(`${Path.Root}`)
  }

  const logoutHandle = () => {
    dispatch(logoutUser())
  }

  return (
    <>
      <div className={style.info} onClick={activeUserInfoMenuHandler}>
        <div className={style.infoName}>{userName}</div>

        <div className={style.infoAvatar}>
          <img className={style.imgUserAvatar} src={avatar} alt={'avatar miniature picture'} />
        </div>
        {isActive && (
          <InfoMenu>
            <div className={style.menuItemChildren} onClick={profileHandle}>
              <img src={user} alt={'profile'} />
              Profile
            </div>
            <div className={style.menuItemChildren} onClick={logoutHandle}>
              <img src={logout} alt={'log out'} />
              Log Out
            </div>
          </InfoMenu>
        )}
      </div>
    </>
  )
}
