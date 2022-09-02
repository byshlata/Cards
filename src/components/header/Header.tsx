import React from 'react'

import { CustomButton, MenuHeader } from 'components'
import { useSelector } from 'react-redux'
import { selectorIsAuth } from 'store'

import itIncubatorLogo from '../../assets/image/logo-ItIncubator.svg'
import styleMain from '../../styles/container.module.sass'

import style from './Header.module.sass'

export const Header = () => {
  const isAuth = useSelector(selectorIsAuth)

  return (
    <header className={style.header}>
      <div className={styleMain.container}>
        <div className={style.headerContainer}>
          <img className={style.logo} src={itIncubatorLogo} alt={'logo'} />
          <div className={style.wrapper}>
            {!isAuth ? <CustomButton color="primary">Sing In</CustomButton> : <MenuHeader />}
          </div>
        </div>
      </div>
    </header>
  )
}
