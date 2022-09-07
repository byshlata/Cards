import React, { useEffect } from 'react'

import style from './CustomAlertChild.module.sass'
import { useAlertStyle } from './hooks/useClassAlertElement'
import { SuccessIcon, ErrorIcon } from './icon'
import { CustomAlertChildType, IconAlertType } from './types'

import { CustomButton } from 'components'
import { useAppDispatch } from 'hooks'
import { removeErrorMessage } from 'store'

const ICON: IconAlertType = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
}

const DALEY_ALERT = 3000

export const CustomAlertChild = ({ message, severity, onClose, id }: CustomAlertChildType) => {
  const dispatch = useAppDispatch()
  const { iconElement, classAlert, classCross } = useAlertStyle(severity, ICON)

  const onCloseAlert = () => {
    onClose(id)
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      onClose(id)
      dispatch(removeErrorMessage())
    }, DALEY_ALERT)

    return () => {
      clearTimeout(timer)
    }
  }, [message])

  return (
    <div className={classAlert}>
      <div>{iconElement}</div>
      <div>
        <h6 className={style.title}>{severity}</h6>
        {message}
      </div>
      <div style={{ width: '16px' }}>
        <CustomButton color="link" disabled={false} onClick={onCloseAlert}>
          <div className={classCross} />
        </CustomButton>
      </div>
    </div>
  )
}
