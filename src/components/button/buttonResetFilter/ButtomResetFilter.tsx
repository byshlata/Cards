import React from 'react'

import { CustomButtonBox, IconFilterSvg } from 'components/index'

import style from './ButtomResetFilter.module.sass'

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
