import React from 'react'

import { CustomButton, CustomButtonBox } from 'components/button'
import { IconLogoutSvg } from 'components/iconSVG/iconLogoutSVG/IconLogoutSVG'
import { IconUserSvg } from 'components/iconSVG/iconUserSVG/IconUserSVG'
import { Menu } from 'components/menu/Menu'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser, selectorIsAuth } from 'store'

import itIncubatorLogo from '../../assets/image/logo-ItIncubator.svg'
import styleMain from '../../styles/container.module.sass'

import style from './Header.module.sass'
import { HeaderUserInfo } from './HeaderUserInfo'

export const Header = () => {
  const isAuth = useSelector(selectorIsAuth)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const profileHandle = () => {
    navigate(`${Path.Root}`)
  }

  const logoutHandle = () => {
    dispatch(logoutUser())
  }

  return (
    <header className={style.header}>
      <div className={styleMain.container}>
        <div className={style.headerContainer}>
          <img className={style.logo} src={itIncubatorLogo} alt={'logo'} />
          <div className={style.wrapper}>
            {!isAuth ? (
              <CustomButton color="primary">Sing In</CustomButton>
            ) : (
              <Menu headMenu={<HeaderUserInfo />}>
                <CustomButtonBox color={'link'} onClick={profileHandle}>
                  <IconUserSvg />
                  Profile
                </CustomButtonBox>
                <CustomButtonBox color={'link'} onClick={logoutHandle}>
                  <IconLogoutSvg />
                  Logout
                </CustomButtonBox>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
