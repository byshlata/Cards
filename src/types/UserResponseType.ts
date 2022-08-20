import { UserInformationType } from './UserInformationType'

export type UserResponseType = UserInformationType & {
  token: string
  tokenDeathTime: Date
  avatar?: string
}
