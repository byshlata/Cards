import React from 'react'

import { useSelector } from 'react-redux'

import avatar from '../../assets/image/avatar.png'
import itIncubatorLogo from '../../assets/image/itIncubatorLogo.png'
import { selectorUserName } from '../../store'
import styleMain from '../../styles/container.module.sass'

import style from './Header.module.sass'

export const Header = () => {
  const userName = useSelector(selectorUserName)
  return (
    <>
      <header className={style.header}>
        <div className={styleMain.container}>
          <div className={style.pageHeader}>
            <div className={style.logo}>
              <img src={itIncubatorLogo} alt={'logo'} />
            </div>
            <div className={style.info}>
              <div className={style.infoName}>{userName}</div>
              <div className={style.infoAvatar}>
                <img src={avatar} alt={'avatar miniature picture'} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
