import { ErrorShortResponseType } from './ErrorShortResponseType'

export type ErrorRecoveryPasswordType = ErrorShortResponseType & {
  resetPasswordToken: boolean
}
