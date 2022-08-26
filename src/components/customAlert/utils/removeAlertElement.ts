import { Nullable } from 'types'

import { AlertElementType } from '../types'

export const removeAlertElement = (
  alerts: Nullable<AlertElementType[]>,
  id: string
): AlertElementType[] | null => {
  if (alerts) {
    const newAlerts = alerts.filter((alert) => alert.id !== id)
    return newAlerts.length === 0 ? null : newAlerts
  }
  return null
}
