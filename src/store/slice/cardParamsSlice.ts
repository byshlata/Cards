import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardParamsInitialType, CardParamsType } from 'types'

export const initialStateCardParams: CardParamsInitialType = {
  cardAnswer: '',
  cardQuestion: '',
  cardsPack_id: '',
  sortCards: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 8,
}

export const cardParamsSlice = createSlice({
  name: 'packParamsSlice',
  initialState: initialStateCardParams,
  reducers: {
    setCardParams: (state, action: PayloadAction<CardParamsType>) => ({
      ...state,
      ...action.payload,
    }),
    removeCardParams: () => initialStateCardParams,
  },
})

export const { setCardParams, removeCardParams } = cardParamsSlice.actions
