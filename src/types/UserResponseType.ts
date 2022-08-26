import { UserInformationType } from './UserInformationType'

export type UserResponseType = UserInformationType & {
  token: string
  tokenDeathTime: string
  avatar?: string
}
