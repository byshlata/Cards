import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import avatar from '../../assets/image/avatar.png'
import { selectorUserName } from '../../store'

import { HeaderUserInfoMenu } from './HeaderUserInfoMenu'
import style from './UserInfo.module.sass'

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

        <div className={style.infoAvatar}>
          <img className={style.imgUserAvatar} src={avatar} alt={'avatar miniature picture'} />
        </div>
      </div>
      {isActive && <HeaderUserInfoMenu />}
    </>
  )
}
