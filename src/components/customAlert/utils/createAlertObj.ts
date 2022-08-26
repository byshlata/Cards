import { AlertElementType } from '../types'

export const createAlertObj = (message: string): AlertElementType => {
  return { id: Math.random().toString(), message }
}
