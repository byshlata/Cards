import { SeverityType } from './SeverityType'

import { ErrorMessageType } from 'types'

export type CustomAlertType = {
  message: ErrorMessageType
  severity: SeverityType
}
