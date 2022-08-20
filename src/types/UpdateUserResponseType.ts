import { UserResponseType } from './UserResponseType'

export type UpdateUserResponseType = {
  updatedUser: UserResponseType
  token: string
  tokenDeathTime: string
}
