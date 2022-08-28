import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PackParamsType, PacksType, ParamsType, UserResponseType } from 'types'

export const initialState: PackParamsType = {
  user_id: '',
  max: 20,
  min: 0,
  page: 1,
  pageCount: '',
  sortPacks: '',
  packName: '',
}

export const packParamsSlice = createSlice({
  name: 'packParamsSlice',
  initialState,
  reducers: {
    setPackParams: (state, action: PayloadAction<PackParamsType>) => ({
      ...state,
      ...action.payload,
    }),
    removePackParams: () => initialState,
  },
})

export const { setPackParams, removePackParams } = packParamsSlice.actions
