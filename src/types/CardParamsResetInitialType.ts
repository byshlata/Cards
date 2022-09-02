import { ParamsType } from 'types/ParamsType'

export type CardParamsResetInitialType = {
  cardAnswer: ParamsType<string>
  cardQuestion: ParamsType<string>
  min: number
  max: number
  sortCards: ParamsType<string | number>
  page: number
  pageCount: number
  isFirstOpen: boolean
}
