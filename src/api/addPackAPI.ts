import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'

import { AddPackType } from '../types'

import { API_CONFIG } from './config'

export const addPackAPI = {
  postPackData: async ({ name }: AddPackType) => {
    const response = await API_CONFIG.post<any>(`${PathAPI.Cards}${PathAPI.Pack}`, {
      cardsPack: { name },
    })
    return response.data
  },
}
