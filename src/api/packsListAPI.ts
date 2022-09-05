import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { PackParamsType, PackType, PackResponseType, EditPackType, AddPackType } from 'types'

import { API_CONFIG } from './config'

export const packsListAPI = {
  getPackData: async ({
    packName,
    min,
    max,
    sortPacks,
    page,
    pageCount,
    user_id,
  }: PackParamsType) => {
    const response = await API_CONFIG.get<
      any,
      AxiosResponse<PackResponseType, PackType>,
      PackParamsType
    >(`${PathAPI.Cards}${PathAPI.Pack}`, {
      params: {
        packName,
        min,
        max,
        sortPacks,
        page,
        pageCount,
        user_id,
      },
    })
    return response.data
  },

  putEditPuckName: async ({ _id, name }: EditPackType) => {
    const response = await API_CONFIG.put<any>(`${PathAPI.Cards}${PathAPI.Pack}`, {
      cardsPack: { _id, name },
    })
    return response.data
  },

  postPackData: async ({ name }: AddPackType) => {
    const response = await API_CONFIG.post<any>(`${PathAPI.Cards}${PathAPI.Pack}`, {
      cardsPack: { name },
    })
    return response.data
  },
}
