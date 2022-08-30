import React from 'react'

import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from 'store'

import logout from '../../assets/image/logout.png'
import user from '../../assets/image/userButton.png'

import style from './UserInfo.module.sass'

export const HeaderUserInfoMenu = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const profileHandle = () => {
    navigate(`${Path.Root}`)
  }

  const logoutHandle = () => {
    dispatch(logoutUser())
  }
  return (
    <div className={style.menuContainer}>
      <div className={style.angle}></div>
      <div className={style.helpBlock}>
        <div className={style.menuProfile} onClick={profileHandle}>
          <img src={user} alt={'profile'} />
          Profile
        </div>
        <div className={style.menuLogOut} onClick={logoutHandle}>
          <img src={logout} alt={'log out'} />
          Log Out
        </div>
      </div>
    </div>
  )
}
