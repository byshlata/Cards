import React from 'react'

import style from 'components/button/buttonResetFilter/ButtomResetFilter.module.sass'
import { CustomButtonBox, IconFilterSvg } from 'components/index'
import { useAppDispatch } from 'hooks'
import { removePackData } from 'store'

export const ButtonResetFilter = () => {
  const dispatch = useAppDispatch()

  const onResetFilter = () => {
    dispatch(removePackData())
  }

  return (
    <div className={style.buttonWrapper}>
      <CustomButtonBox color="secondary" borderRadius="2px" onClick={onResetFilter}>
        <IconFilterSvg />
      </CustomButtonBox>
    </div>
  )
}
