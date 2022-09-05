import React from 'react'

import { CustomButtonBox, IconFilterSvg } from 'components/index'

import style from './ButtomResetFilter.module.sass'

type buttonResetFilterType = {
  onResetFilter: () => void
  disabled: boolean
}

export const ButtonResetFilter = ({ onResetFilter, disabled }: buttonResetFilterType) => {
  const onResetFilterHandle = () => {
    onResetFilter()
  }

  return (
    <div className={style.buttonWrapper}>
      <CustomButtonBox
        color="secondary"
        borderRadius="2px"
        onClick={onResetFilterHandle}
        disabled={disabled}
      >
        <IconFilterSvg />
      </CustomButtonBox>
    </div>
  )
}
