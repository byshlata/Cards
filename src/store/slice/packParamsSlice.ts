import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PackParamsInitialType } from 'types'

export const initialStatePackParams: PackParamsInitialType = {
  user_id: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 10,
  sortPacks: '',
  packName: '',
}

export const packParamsSlice = createSlice({
  name: 'packParamsSlice',
  initialState: initialStatePackParams,
  reducers: {
    setPackParams: (state, action: PayloadAction<Partial<PackParamsInitialType>>) => ({
      ...state,
      ...action.payload,
    }),
    removePackParams: () => initialStatePackParams,
  },
})

export const { setPackParams, removePackParams } = packParamsSlice.actions
