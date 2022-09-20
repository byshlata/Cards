import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { PackParamsType, PackType, UsersParamsType, UsersResponseType } from 'types'

import { API_CONFIG } from './config'

export const usersAPI = {
  getUsers: async ({
    userName,
    sortUsers,
    min,
    max,
    page,
    pageCount,
  }: Partial<UsersParamsType>) => {
    const response = await API_CONFIG.get<any, AxiosResponse<UsersResponseType>, PackParamsType>(
      `${PathAPI.Social}${PathAPI.Users}`,
      {
        params: {
          userName,
          sortUsers,
          min,
          max,
          page,
          pageCount,
        },
      }
    )
    return response.data
  },
  // getUser: async (payload: { id: string }) => {
  //   const response = await API_CONFIG.get(<any,  A>)
  // },
}
