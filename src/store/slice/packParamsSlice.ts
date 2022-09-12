import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PackParamsInitialType, PackParamsType } from 'types'

export const initialStatePackParams: PackParamsInitialType = {
  user_id: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 8,
  sortPacks: '',
  packName: '',
}

export const packParamsSlice = createSlice({
  name: 'packParamsSlice',
  initialState: initialStatePackParams,
  reducers: {
    setPackParams: (state, action: PayloadAction<PackParamsType>) => ({
      ...state,
      ...action.payload,
    }),
    removePackParams: () => initialStatePackParams,
  },
})

export const { setPackParams, removePackParams } = packParamsSlice.actions
