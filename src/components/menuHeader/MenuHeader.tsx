import React from 'react'

import { AvatarUserSmall, CustomButtonBox, IconLogoutSvg, IconUserSvg, Menu } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from 'store'

export const MenuHeader = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const profileHandle = () => {
    navigate(`${Path.Root}`)
  }

  const logoutHandle = () => {
    dispatch(logoutUser())
  }

  return (
    <Menu headMenu={<AvatarUserSmall />}>
      <CustomButtonBox color={'link'} onClick={profileHandle}>
        <IconUserSvg />
        Profile
      </CustomButtonBox>
      <CustomButtonBox color={'link'} onClick={logoutHandle}>
        <IconLogoutSvg />
        Logout
      </CustomButtonBox>
    </Menu>
  )
}
