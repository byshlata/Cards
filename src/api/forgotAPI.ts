import { latterHTMLEnd, latterHTMLStart } from 'api/optionAPI/latterHTML'
import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { MessageNewPasswordType, PasswordResponseType, RecoveryPasswordType } from 'types'

import { API_CONFIG } from './config'

const from = 'test-front-admin '

export const forgotAPI = {
  sendLetter: async (email: string, name: string) => {
    const message = latterHTMLStart + `Dear <b>${name}</b>.` + latterHTMLEnd

    const response = await API_CONFIG.post<
      any,
      AxiosResponse<PasswordResponseType>,
      MessageNewPasswordType
    >(`${PathAPI.Auth}${PathAPI.Forgot}`, { email, message, from })
    return response.data
  },

  setNewPassword: async ({ password, resetPasswordToken }: RecoveryPasswordType) => {
    const response = await API_CONFIG.post<
      any,
      AxiosResponse<{ info: string }>,
      RecoveryPasswordType
    >(`${PathAPI.Auth}${PathAPI.NewPassword}`, { password, resetPasswordToken })

    return response.data
  },
}
