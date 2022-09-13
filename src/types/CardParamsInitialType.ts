import { ParamsType } from 'types/ParamsType'

export type CardParamsInitialType = {
  cardAnswer: ParamsType<string>
  cardQuestion: ParamsType<string>
  cardsPack_id: ParamsType<string>
  min: number
  max: number
  sortCards: ParamsType<string | number>
  page: number
  pageCount: number
}
