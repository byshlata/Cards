import { AxiosResponse } from 'axios'
import { PathAPI } from 'enums'
import { CardParamsType, CardResponseType, CardShortType, CardType, EditCardType } from 'types'

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
    const response = await API_CONFIG.put<any, AxiosResponse<any>, { card: EditCardType }>(
      `${PathAPI.Cards}${PathAPI.Card}`,
      {
        card: { _id, answer, question, comments },
      }
    )
    return response.data
  },

  createCard: async ({
    cardsPack_id,
    question,
    questionImg,
    questionVideo,
    answerVideo,
    answer,
    answerImg,
    shots,
    grade,
  }: CardShortType) => {
    const response = await API_CONFIG.post<any, AxiosResponse<any>, { card: CardShortType }>(
      `${PathAPI.Cards}${PathAPI.Card}`,
      {
        card: {
          cardsPack_id,
          question,
          questionImg,
          questionVideo,
          answerVideo,
          answer,
          answerImg,
          shots,
          grade,
        },
      }
    )
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
