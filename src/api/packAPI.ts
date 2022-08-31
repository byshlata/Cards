import { AxiosResponse } from 'axios'

import { API_CONFIG } from './config'

import { PathAPI } from 'enums'
import { EditResponseType, PackParamsType, PackResponseType, PacksType } from 'types'

export const packAPI = {
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
      AxiosResponse<PacksType, PackResponseType>,
      PackParamsType
    >(`${PathAPI.Cards}${PathAPI.Pack}`, {
      params: {
        packName: packName,
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
  createPack: async (name: string) => {
    return await API_CONFIG.post<any, AxiosResponse<PacksType, PackResponseType>, EditResponseType>(
      `${PathAPI.Cards}${PathAPI.Pack}`,
      {
        cardsPack: { name },
      }
    )
  },
  editPack: async (_id: string, name: string) => {
    return (await API_CONFIG.put)<
      any,
      AxiosResponse<PacksType, PackResponseType>,
      EditResponseType
    >(`${PathAPI.Cards}${PathAPI.Pack}`, {
      cardsPack: { _id, name },
    })
  },
  // removePack: async (id: string) => {
  //   return await API_CONFIG.delete<any, AxiosResponse<PackResponseType>, PackParamsType>(
  //     `${PathAPI.Cards}${PathAPI.Pack}`,
  //     {
  //       params: { id },
  //     }
  //   )
  // },
}
