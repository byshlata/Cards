import { AlertElementType } from 'components/customAlert/types/alertElementType'

export const createAlertObj = (message: string): AlertElementType => {
  return { id: Math.random().toString(), message }
}
