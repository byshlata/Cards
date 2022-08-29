import React from 'react'

import { CustomButtonBox, IconFilterSvg } from 'components'
import { useAppDispatch } from 'hooks'
import { getPackData, START_VALUE_PACK_PARAMS } from 'store'

import style from './ButtomResetFilter.module.sass'

export const ButtonResetFilter = () => {
  const dispatch = useAppDispatch()

  const onResetFilter = () => {
    dispatch(getPackData(START_VALUE_PACK_PARAMS))
  }

  return (
    <div className={style.buttonWrapper}>
      <CustomButtonBox color="secondary" borderRadius="2px" onClick={onResetFilter}>
        <IconFilterSvg />
      </CustomButtonBox>
    </div>
  )
}
