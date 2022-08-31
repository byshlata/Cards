import { PackResponseType } from 'types/PackResponseType'

export type PacksType = {
  cardPacks: PackResponseType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
  token: string
  tokenDeathTime: string
}
