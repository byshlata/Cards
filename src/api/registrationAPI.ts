import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { API_CONFIG } from './config'
import { ErrorResponseType, RegistrationType, RegistrationUserResponseType } from '../types'

export const registrationAPI = {
  registerUser: async ({ email, password }: RegistrationType) => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<RegistrationUserResponseType | ErrorResponseType>,
      RegistrationType
    >(`${PathAPI.Auth}${PathAPI.Register}`, { email, password })
    return response.data
  },
}
