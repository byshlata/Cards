import { RegistrationType } from './RegistrationType'

export type LoginType = RegistrationType & {
  rememberMe: boolean
}
