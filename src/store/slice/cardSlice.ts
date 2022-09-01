import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardResponseType } from 'types'

export const initialState: CardResponseType = {
  cards: [],
  packUserId: '',
  packName: '',
  packPrivate: false,
  packDeckCover: '',
  packCreated: '',
  packUpdated: '',
  page: 1,
  pageCount: 0,
  cardsTotalCount: 0,
  minGrade: 0,
  maxGrade: 0,
  token: '',
  tokenDeathTime: '',
}

export const cardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {
    setCardData: (state, action: PayloadAction<CardResponseType>) => action.payload,
    removeCardData: () => initialState,
  },
})

export const { setCardData, removeCardData } = cardSlice.actions
