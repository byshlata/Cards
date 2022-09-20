import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PackParamsType } from 'types'

export const initialStatePackParams: PackParamsType = {
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
    setPackParams: (state, action: PayloadAction<Partial<PackParamsType>>) => ({
      ...state,
      ...action.payload,
    }),
    removePackParams: () => initialStatePackParams,
  },
})

export const { setPackParams, removePackParams } = packParamsSlice.actions
