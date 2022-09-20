import { UserType } from 'types/UserType'

export type UserInformationType = UserType & {
  rememberMe: boolean
  __v: number
}
