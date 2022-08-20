import { PathAPI } from 'enums'
import { AxiosResponse } from 'axios'
import { API_CONFIG } from './config'
import {
  ErrorResponseType,
  PasswordResponseType,
  RecoveryPasswordType,
  MessageNewPasswordType,
} from 'types'
import { ErrorRecoveryPasswordType } from '../types/ErrorRecoveryPasswordType'

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
