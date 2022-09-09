import { Nullable, CardType } from 'types'

export type CardResponseType = {
  cards: CardType[]
  packUserId: string
  packName: string
  packPrivate: boolean
  packDeckCover: Nullable<string | boolean>
  packCreated: string
  packUpdated: string
  page: number
  pageCount: number
  cardsTotalCount: number
  minGrade: number
  maxGrade: number
  token: string
  tokenDeathTime: string
}
