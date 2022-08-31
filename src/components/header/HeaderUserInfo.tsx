import React, { useState } from 'react'

import logout from 'assets/image/logout.png'
import user from 'assets/image/userButton.png'
import { InfoMenu } from 'components/header/InfoMenu'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser, selectorUserName } from 'store'

import avatar from '../../assets/image/avatar.png'

import style from './UserInfo.module.sass'

export const HeaderUserInfo = () => {
  const userName = useSelector(selectorUserName)

  return (
    <>
      <div className={style.info}>
        <div className={style.infoName}>{userName}</div>

        <div className={style.infoAvatar}>
          <img className={style.imgUserAvatar} src={avatar} alt={'avatar miniature picture'} />
        </div>
      </div>
    </>
  )
}
