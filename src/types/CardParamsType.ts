import { ParamsType } from 'types/ParamsType'

export type CardParamsType = {
  cardAnswer: ParamsType<string>
  cardQuestion: ParamsType<string>
  cardsPack_id: string
  min: number
  max: number
  sortCards: ParamsType<string>
  page: number
  pageCount: number
}
