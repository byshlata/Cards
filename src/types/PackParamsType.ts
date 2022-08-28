import { ParamsType } from 'types/ParamsType'

export type PackParamsType = {
  packName?: ParamsType<string>
  min?: ParamsType<number>
  max?: ParamsType<number>
  sortPacks?: ParamsType<number>
  page?: ParamsType<number>
  pageCount?: ParamsType<number>
  user_id?: ParamsType<string>
}
