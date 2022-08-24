import { Nullable } from 'types'

import { SeverityType } from './SeverityType'

export type CustomAlertChildType = {
  textMessage: Nullable<string>
  severity: SeverityType
}
