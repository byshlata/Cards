import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { PackParamsType, PackType, PackResponseType } from 'types'

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
}
