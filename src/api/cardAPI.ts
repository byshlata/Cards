import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import {
  PackParamsType,
  PackType,
  PackResponseType,
  CardParamsType,
  CardResponseType,
  CardType,
  ParamsType,
} from 'types'

import { API_CONFIG } from './config'

export const cardAPI = {
  getCardData: async ({
    cardAnswer,
    cardQuestion,
    cardsPack_id,
    min,
    max,
    sortCards,
    page,
    pageCount,
  }: CardParamsType) => {
    const response = await API_CONFIG.get<
      any,
      AxiosResponse<CardResponseType, CardType>,
      CardParamsType
    >(`${PathAPI.Cards}${PathAPI.Card}`, {
      params: {
        cardAnswer,
        cardQuestion,
        cardsPack_id,
        min,
        max,
        sortCards,
        page,
        pageCount,
      },
    })
    return response.data
  },
}
