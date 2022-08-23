import React from 'react'

import { CustomButton } from 'components/button'
import SuccessIcon from 'components/customAlert/icon/SuccessIcon'

import style from './CustomAlert.module.sass'

export const CustomAlert = () => {
  const onCloseAlert = () => {}

  return (
    <div className={style.customAlert}>
      <SuccessIcon />
      <div>
        <h6 className={style.title}>Success</h6>
        dkdljfhsldkhfkjsdghfkj
      </div>
      <CustomButton color="link" disabled={false} onClick={onCloseAlert}>
        <div className={style.close} />
      </CustomButton>
    </div>
  )
}
