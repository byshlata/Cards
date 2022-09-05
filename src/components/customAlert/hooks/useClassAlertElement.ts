import { ReactElement } from 'react'

import style from '../CustomAlertChild.module.sass'
import { IconAlertType, SeverityType } from '../types'

type useAlertStyleReturnType = {
  classAlert: string
  classCross: string
  iconElement: ReactElement
}

export const useAlertStyle = (
  severity: SeverityType,
  icon: IconAlertType
): useAlertStyleReturnType => {
  const classAlert = severity === 'success' ? style.customAlertSuccess : style.customAlertError
  const classCross = severity === 'success' ? style.closeSuccess : style.closeError
  const iconElement = severity === 'success' ? icon.success : icon.error

  return { classAlert, classCross, iconElement }
}
