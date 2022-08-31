import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PacksType, UserResponseType } from 'types'

export const initialState: PacksType = {
  cardPacks: [],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  page: 0,
  pageCount: 0,
  token: '',
  tokenDeathTime: '',
}

export const packSlice = createSlice({
  name: 'packSlice',
  initialState,
  reducers: {
    setPackData: (state, action: PayloadAction<PacksType>) => action.payload,
    removePackData: () => initialState,
  },
})

export const { setPackData, removePackData } = packSlice.actions
