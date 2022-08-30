import React from 'react'

import { useSelector } from 'react-redux'

import { selectorIsLoading } from '../../store'
import styleMain from '../../styles/container.module.sass'
import { CustomButton } from '../button'

export const HeaderAuthButton = () => {
  const isLoading = useSelector(selectorIsLoading)
  return (
    <div className={styleMain.headerButton}>
      <CustomButton type="submit" color="primary" disabled={isLoading}>
        Sign In
      </CustomButton>
    </div>
  )
}
