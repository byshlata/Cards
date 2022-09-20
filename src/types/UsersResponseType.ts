import { UserType } from 'types'

export type UsersResponseType = {
  users: UserType[]
  usersTotalCount: number
  maxPublicCardPacksCount: number
  minPublicCardPacksCount: number
  page: number
  pageCount: number
  token: string
  tokenDeathTime: string
}
