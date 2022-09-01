import React from 'react'

import style from 'components/button/buttonResetFilter/ButtomResetFilter.module.sass'
import { CustomButtonBox, IconFilterSvg } from 'components/index'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorIsLoading, unmountingComponent } from 'store'

export const ButtonResetFilter = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectorIsLoading)

  const onResetFilter = () => {
    dispatch(unmountingComponent())
  }

  return (
    <div className={style.buttonWrapper}>
      <CustomButtonBox
        color="secondary"
        borderRadius="2px"
        onClick={onResetFilter}
        disabled={isLoading}
      >
        <IconFilterSvg />
      </CustomButtonBox>
    </div>
  )
}
