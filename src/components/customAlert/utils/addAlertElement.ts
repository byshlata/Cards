import { Nullable } from 'types'

import { AlertElementType } from '../types'

export const addAlertElement = (
  alerts: Nullable<AlertElementType[]>,
  alert: AlertElementType
): AlertElementType[] => {
  if (alerts) {
    return [...alerts, alert]
  }

  return [alert]
}
