import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PackResponseType } from 'types'

export const initialState: PackResponseType = {
  cardPacks: [],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  page: 1,
  pageCount: 0,
  token: '',
  tokenDeathTime: '',
}

export const packSlice = createSlice({
  name: 'packSlice',
  initialState,
  reducers: {
    setPackData: (state, action: PayloadAction<PackResponseType>) => action.payload,
    removePackData: () => initialState,
  },
})

export const { setPackData, removePackData } = packSlice.actions
