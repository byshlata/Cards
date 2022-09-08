import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { AddPackType, CardParamsType, CardResponseType, CardType, EditCardType } from 'types'

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

  editCard: async ({ _id, answer, question, comments }: EditCardType) => {
    const response = await API_CONFIG.put<any>(`${PathAPI.Cards}${PathAPI.Card}`, {
      card: { _id, answer, question, comments },
    })
    return response.data
  },

  createCard: async ({ name, privateValue, deckCover }: AddPackType) => {
    const response = await API_CONFIG.post<any>(`${PathAPI.Cards}${PathAPI.Card}`, {
      cardsPack: { name, private: privateValue, deckCover },
    })
    return response.data
  },

  deleteCard: async (idCard: string) => {
    const response = await API_CONFIG.delete<any>(`${PathAPI.Cards}${PathAPI.Card}`, {
      params: {
        id: idCard,
      },
    })
    return response.data
  },
}
