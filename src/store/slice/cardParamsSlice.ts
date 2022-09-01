import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardParamsInitialType, PackParamsType } from 'types'

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

const resetStateCardParams: CardParamsInitialType = {
  cardAnswer: '',
  cardQuestion: '',
  cardsPack_id: '',
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
    setCardParams: (state, action: PayloadAction<PackParamsType>) => ({
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
    resetCardParams: () => resetStateCardParams,
  },
})

export const {
  setCardParams,
  removeCardParams,
  resetCardParams,
  removeIsFirstOpenCardPage,
  setIsFirstOpenCardPage,
} = cardParamsSlice.actions
