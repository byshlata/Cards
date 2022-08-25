import { AlertElementType } from 'components/customAlert/types/alertElementType'
import { Nullable } from 'types'

export const addAlertElement = (
  alerts: Nullable<AlertElementType[]>,
  alert: AlertElementType
): AlertElementType[] => {
  if (alerts) {
    return [...alerts, alert]
  }
  return [alert]
}
