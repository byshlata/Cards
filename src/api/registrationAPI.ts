import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { ErrorResponseType, RegistrationType, RegistrationUserResponseType } from 'types'

import { API_CONFIG } from './config'

export const registrationAPI = {
  registerUser: async ({ email, password }: RegistrationType) => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<RegistrationUserResponseType>,
      RegistrationType
    >(`${PathAPI.Auth}${PathAPI.Register}`, { email, password })
    return response.data
  },
}
