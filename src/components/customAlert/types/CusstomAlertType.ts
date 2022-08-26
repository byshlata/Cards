import { ErrorMessageType } from 'types'

import { SeverityType } from './SeverityType'

export type CustomAlertType = {
  message: ErrorMessageType
  severity: SeverityType
}
