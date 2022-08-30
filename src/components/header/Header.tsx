import React from 'react'

import { useSelector } from 'react-redux'
import { selectorIsAuth } from 'store'

import itIncubatorLogo from '../../assets/image/logo-ItIncubator.svg'

import style from './Header.module.sass'
import { HeaderAuthButton } from './HeaderAuthButton'
import { HeaderUserInfo } from './HeaderUserInfo'

export const Header = () => {
  const isAuth = useSelector(selectorIsAuth)
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={itIncubatorLogo} alt={'logo'} />
      </div>
      <div className={style.classAuth}>{!isAuth ? <HeaderAuthButton /> : <HeaderUserInfo />}</div>
    </header>
  )
}
