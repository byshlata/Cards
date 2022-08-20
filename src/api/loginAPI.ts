import { API_CONFIG } from './config'
import {
  ErrorResponseType,
  ErrorShortResponseType,
  LoginOutResponseType,
  LoginType,
  UserResponseType,
} from 'types'
import { PathAPI } from 'enums'
import { AxiosResponse } from 'axios'

export const loginAPI = {
  loginIn: async ({ password, rememberMe, email }: LoginType) => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<UserResponseType | ErrorResponseType, LoginType>,
      LoginType
    >(`${PathAPI.Auth}${PathAPI.Login}`, { password, rememberMe, email })
    return response.data
  },

  loginOut: async () => {
    const response = await API_CONFIG.delete<
      any,
      AxiosResponse<LoginOutResponseType | ErrorShortResponseType>
    >(`${PathAPI.Auth}${PathAPI.Me}`)
    return response.data
  },
}
