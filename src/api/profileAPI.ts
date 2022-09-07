import { AxiosResponse } from 'axios'

import { API_CONFIG } from './config'

import { PathAPI } from 'enums'
import { ChangeInformationUserType, UpdateUserResponseType, UserResponseType } from 'types'

export const profileAPI = {
  getAuthUser: async () => {
    const response = await API_CONFIG.post<any, AxiosResponse<UserResponseType>>(
      `${PathAPI.Auth}${PathAPI.Me}`
    )

    return response.data
  },

  changeInformationUser: async (payload: ChangeInformationUserType) => {
    const response = await API_CONFIG.put<
      any,
      AxiosResponse<UpdateUserResponseType>,
      ChangeInformationUserType
    >(`${PathAPI.Auth}${PathAPI.Me}`, payload)

    return response.data
  },
}
