import { ParamsType } from 'types/ParamsType'

export type UsersParamsType = {
  userName: ParamsType<string>
  min: number
  max: number
  sortUsers: ParamsType<string>
  page: number
  pageCount: number
}
