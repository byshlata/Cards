import React, { FC, ReactNode } from 'react'

import { CustomButton } from 'components/button/customButton/CustomButton'
import { IconArrowSvg } from 'components/iconSVG/iconArrowSVG/IconArrowSVG'
import { NavLink } from 'react-router-dom'

type ButtonBackType = {
  disabled?: boolean
  children?: ReactNode
  link: string
}

export const ButtonBack: FC<ButtonBackType> = ({ disabled, link, children }) => {
  return (
    <NavLink to={link}>
      <CustomButton color="link" disabled={disabled}>
        <IconArrowSvg />
        {children}
      </CustomButton>
    </NavLink>
  )
}
