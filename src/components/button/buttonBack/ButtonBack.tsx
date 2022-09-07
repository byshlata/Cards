import React, { FC, ReactNode } from 'react'

import { CustomButton, IconArrowSvg } from 'components'
import { NavLink } from 'react-router-dom'

import style from './ButtonBack.module.sass'

type ButtonBackType = {
  disabled?: boolean
  children?: ReactNode
  link: string
}

export const ButtonBack: FC<ButtonBackType> = ({ disabled, link, children }) => {
  return (
    <NavLink className={style.buttonBackPacksWrapper} to={link}>
      <CustomButton color="link" disabled={disabled}>
        <IconArrowSvg />
        {children}
      </CustomButton>
    </NavLink>
  )
}
