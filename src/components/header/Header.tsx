import React from 'react'

import { useSelector } from 'react-redux'

import itIncubatorLogo from '../../assets/image/logo-ItIncubator.svg'
import styleMain from '../../styles/container.module.sass'

import style from './Header.module.sass'
import { HeaderUserInfo } from './HeaderUserInfo'

import { CustomButton } from 'components/button'
import { selectorIsAuth } from 'store'

export const Header = () => {
  const isAuth = useSelector(selectorIsAuth)

  return (
    <header className={style.header}>
      <div className={styleMain.container}>
        <div className={style.headerContainer}>
          <img className={style.logo} src={itIncubatorLogo} alt={'logo'} />
          <div className={style.wrapper}>
            {!isAuth ? <CustomButton color="primary">Sing In</CustomButton> : <HeaderUserInfo />}
          </div>
        </div>
      </div>
    </header>
  )
}
