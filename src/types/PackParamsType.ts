import { ParamsType } from 'types/ParamsType'

export type PackParamsType = {
  packName?: ParamsType<string>
  min?: ParamsType<number | string>
  max?: ParamsType<number | string>
  sortPacks?: ParamsType<number | string>
  page?: ParamsType<number | string>
  pageCount?: ParamsType<number | string>
  user_id?: ParamsType<string>
}
