import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardParamsInitialType, CardParamsResetInitialType, CardParamsType } from 'types'

export const initialStateCardParams: CardParamsInitialType = {
  cardAnswer: '',
  cardQuestion: '',
  cardsPack_id: '',
  sortCards: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 8,
  isFirstOpen: false,
}

export const resetStateCardParams: CardParamsResetInitialType = {
  cardAnswer: '',
  cardQuestion: '',
  sortCards: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 8,
  isFirstOpen: true,
}

export const cardParamsSlice = createSlice({
  name: 'packParamsSlice',
  initialState: initialStateCardParams,
  reducers: {
    setCardParams: (state, action: PayloadAction<CardParamsType>) => ({
      ...state,
      ...action.payload,
    }),
    setIsFirstOpenCardPage: (state) => {
      state.isFirstOpen = true
    },
    removeIsFirstOpenCardPage: (state) => {
      state.isFirstOpen = false
    },
    removeCardParams: () => initialStateCardParams,
    resetCardParams: (state) => ({
      ...state,
      ...resetStateCardParams,
    }),
  },
})

export const {
  setCardParams,
  removeCardParams,
  resetCardParams,
  removeIsFirstOpenCardPage,
  setIsFirstOpenCardPage,
} = cardParamsSlice.actions
