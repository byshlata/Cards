import React, { SyntheticEvent } from 'react'

import defaultAvatar from 'assets/image/avatar.png'
import { useSelector } from 'react-redux'
import { selectorAvatarUser, selectorUserName } from 'store'

import style from './AvatarUserSmall.module.sass'

export const AvatarUserSmall = () => {
  const userName = useSelector(selectorUserName)
  let avatar = useSelector(selectorAvatarUser)

  if (!avatar) {
    avatar = defaultAvatar
  }

  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultAvatar
  }

  return (
    <>
      <div className={style.info}>
        <div className={style.infoName}>{userName}</div>
        <div className={style.infoAvatar}>
          <img
            className={style.imgUserAvatar}
            src={avatar}
            alt="avatarUser"
            onError={onError}
            onLoad={onError}
          />
        </div>
      </div>
    </>
  )
}
