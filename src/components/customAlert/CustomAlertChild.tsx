import React from 'react'

import { CustomButton } from 'components/button'

import style from './CustomAlertChild.module.sass'
import { useAlertStyle } from './hooks/useClassAlertElement'
import { SuccessIcon, ErrorIcon } from './icon'
import { CustomAlertChildType } from './types'
import { IconAlertType } from './types'

const ICON: IconAlertType = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
}

export const CustomAlertChild = ({ textMessage, severity }: CustomAlertChildType) => {
  const { iconElement, classAlert, classCross } = useAlertStyle(severity, ICON)
  console.log(textMessage)
  const onCloseAlert = () => {}

  return (
    <div className={classAlert}>
      <div>{iconElement}</div>
      <div>
        <h6 className={style.title}>Success</h6>
        {textMessage}
      </div>
      <CustomButton color="link" disabled={false} onClick={onCloseAlert}>
        <div className={classCross} />
      </CustomButton>
    </div>
  )
}
