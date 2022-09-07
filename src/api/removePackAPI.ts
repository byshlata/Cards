import { PathAPI } from 'enums'

import { RemovePackType } from '../types'

import { API_CONFIG } from './config'

export const removePackAPI = {
  removePackData: async (id: RemovePackType) => {
    console.log({ id: id })
    const response = await API_CONFIG.delete<any>(`${PathAPI.Cards}${PathAPI.Pack}?id=${id}`)
    return response.data
  },
}
