import React from 'react'

import { CustomButton, MenuHeader } from 'components'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectorIsAuth } from 'store'

import itIncubatorLogo from '../../assets/image/logo-ItIncubator.svg'
import styleMain from '../../styles/container.module.sass'

import style from './Header.module.sass'

export const Header = () => {
  const isAuth = useSelector(selectorIsAuth)

  const navigate = useNavigate()

  const onClickRoute = () => {
    navigate(`${Path.Login}`)
  }

  return (
    <header className={style.header}>
      <div className={styleMain.container}>
        <div className={style.headerContainer}>
          <a href="/Profile">
            <img className={style.logo} src={itIncubatorLogo} alt={'logo'} />
          </a>
          <div className={style.wrapper}>
            {!isAuth ? (
              <CustomButton color="primary" onClick={onClickRoute}>
                Sing In
              </CustomButton>
            ) : (
              <MenuHeader />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
