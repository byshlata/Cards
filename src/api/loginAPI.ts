import { AxiosResponse } from 'axios'

import { API_CONFIG } from './config'

import { PathAPI } from 'enums'
import { LoginOutResponseType, LoginType, UserResponseType } from 'types'

export const loginAPI = {
  loginIn: async ({ password, rememberMe, email }: LoginType) => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<UserResponseType, LoginType>,
      LoginType
    >(`${PathAPI.Auth}${PathAPI.Login}`, { password, rememberMe, email })

    return response.data
  },

  loginOut: async () => {
    const response = await API_CONFIG.delete<any, AxiosResponse<LoginOutResponseType>>(
      `${PathAPI.Auth}${PathAPI.Me}`
    )

    return response.data
  },
}
