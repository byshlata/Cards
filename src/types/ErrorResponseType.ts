import { ErrorShortResponseType } from './ErrorShortResponseType'

export type ErrorResponseType = ErrorShortResponseType & {
  email: string
}
