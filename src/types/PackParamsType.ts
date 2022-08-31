import { ParamsType } from 'types/ParamsType'

export type PackParamsType = {
  packName?: ParamsType<string>
  min?: number
  max?: number
  sortPacks?: ParamsType<string | number>
  page?: number
  pageCount?: number
  user_id?: ParamsType<string>
}
