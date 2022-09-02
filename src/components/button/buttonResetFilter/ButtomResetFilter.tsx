import React from 'react'

import style from 'components/button/buttonResetFilter/ButtomResetFilter.module.sass'
import { CustomButtonBox, IconFilterSvg } from 'components/index'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectorIsLoading, unmountingComponent } from 'store'

type buttonResetFilterType = {
  onResetFilter: () => void
  disable: boolean
}

export const ButtonResetFilter = ({ onResetFilter, disable }: buttonResetFilterType) => {
  const onResetFilterHandle = () => {
    onResetFilter()
  }

  return (
    <div className={style.buttonWrapper}>
      <CustomButtonBox
        color="secondary"
        borderRadius="2px"
        onClick={onResetFilterHandle}
        disabled={disable}
      >
        <IconFilterSvg />
      </CustomButtonBox>
    </div>
  )
}
