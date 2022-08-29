import { ParamsType } from 'types/ParamsType'

export type PackParamsInitialType = {
  packName: ParamsType<string>
  min: number
  max: number
  sortPacks: ParamsType<number | string>
  page: number
  pageCount: number
  user_id: ParamsType<string>
  isFirstOpen: boolean
}
