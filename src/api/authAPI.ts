import { API_CONFIG } from './config'
import { UserResponseType } from '../types'
import { PathAPI } from 'enums'

export const authAPI = {
  getAuthUser: async () => {
    const response = await API_CONFIG.get<UserResponseType>(`${PathAPI.Auth}${PathAPI.Me}`)
    return response.data
  },
}
