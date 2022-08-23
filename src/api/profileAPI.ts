import { API_CONFIG } from './config'
import { AxiosResponse } from 'axios'
import {
  ChangeInformationUserType,
  ErrorShortResponseType,
  UpdateUserResponseType,
  UserResponseType,
} from '../types'
import { PathAPI } from '../enums'

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
