import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import {
  ErrorRecoveryPasswordType,
  ErrorResponseType,
  MessageNewPasswordType,
  PasswordResponseType,
  RecoveryPasswordType,
} from 'types'

import { API_CONFIG } from './config'

const from = 'test-front-admin <byshlata@yandex.by>'
const message: string = `<div style="background-color: lime; padding: 15px"> password recovery link:
<a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`

export const forgotAPI = {
  sendLetter: async (email: string) => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<PasswordResponseType | ErrorResponseType>,
      MessageNewPasswordType
    >(`${PathAPI.Auth}${PathAPI.Forgot}`, { email, message, from })
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
