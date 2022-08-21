import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import {
  ErrorResponseType,
  PasswordResponseType,
  RecoveryPasswordType,
  MessageNewPasswordType,
  ErrorRecoveryPasswordType,
} from 'types'

import { API_CONFIG } from './config'

export const forgotAPI = {
  recoveryPassword: async ({ message, from, email }: MessageNewPasswordType) => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<PasswordResponseType | ErrorResponseType>,
      MessageNewPasswordType
    >(`${PathAPI.Auth}${PathAPI.Forgot}`, { email, from, message })
    return response.data
  },

  setNewPassword: async ({ password, resetPasswordToken }: RecoveryPasswordType) => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<{ info: string } | ErrorRecoveryPasswordType>,
      RecoveryPasswordType
    >(`${PathAPI.Auth}${PathAPI.NewPassword}`, { password, resetPasswordToken })
  },
}
