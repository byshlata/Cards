import { AxiosResponse } from 'axios'

import { API_CONFIG } from './config'

import { PathAPI } from 'enums'
import { RegistrationType, RegistrationUserResponseType } from 'types'

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
