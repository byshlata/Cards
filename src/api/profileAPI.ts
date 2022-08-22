import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import {
  ChangeInformationUserType,
  ErrorShortResponseType,
  UpdateUserResponseType,
  UserResponseType,
} from 'types'

import { API_CONFIG } from './config'

export const profileAPI = {
  getAuthUser: async () => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<UserResponseType | ErrorShortResponseType>
    >(`${PathAPI.Auth}${PathAPI.Me}`)
    return response.data
  },

  changeInformationUser: async (payload: ChangeInformationUserType) => {
    const response = await API_CONFIG.put<
      any,
      AxiosResponse<UpdateUserResponseType>,
      ChangeInformationUserType
    >(`${PathAPI.Auth}${PathAPI.Me}`, payload)
  },
}
