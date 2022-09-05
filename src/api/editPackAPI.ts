import { PathAPI } from 'enums'

import { EditPackType } from '../types'

import { API_CONFIG } from './config'

export const editPackAPI = {
  putEditPuckName: async ({ _id, name }: EditPackType) => {
    const response = await API_CONFIG.put<any>(`${PathAPI.Cards}${PathAPI.Pack}`, {
      cardsPack: { _id, name },
    })
    return response.data
  },
}
