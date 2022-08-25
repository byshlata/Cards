import { SeverityType } from 'components/customAlert/types/SeverityType'

export type CustomAlertChildType = {
  message: string
  id: string
  severity: SeverityType
  onClose: (id: string) => void
}
