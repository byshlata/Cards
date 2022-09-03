import React, { SyntheticEvent } from 'react'

import { CustomButton, MenuHeader, Modal } from 'components'
import { useSelector } from 'react-redux'
import { selectorAvatarUser, selectorIsAuth } from 'store'

import defaultAvatar from '../../assets/image/avatar.png'
import itIncubatorLogo from '../../assets/image/logo-ItIncubator.svg'
import styleMain from '../../styles/container.module.sass'
import { useModal } from '../modal/hooks/useModal'

import style from './Header.module.sass'

export const Header = () => {
  const isAuth = useSelector(selectorIsAuth)

  return (
    <header className={style.header}>
      <div className={styleMain.container}>
        <div className={style.headerContainer}>
          <a href="/Profile">
            <img className={style.logo} src={itIncubatorLogo} alt={'logo'} />
          </a>
          <div className={style.wrapper}>
            {!isAuth ? <CustomButton color="primary">Sing In</CustomButton> : <MenuHeader />}
          </div>
        </div>
      </div>
    </header>
  )
}
