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
  isFirstOpen: false,
}

export const packParamsSlice = createSlice({
  name: 'packParamsSlice',
  initialState: initialStatePackParams,
  reducers: {
    setPackParams: (state, action: PayloadAction<PackParamsType>) => ({
      ...state,
      ...action.payload,
    }),
    setIsFirstOpenPage: state => {
      state.isFirstOpen = true
    },
    removeIsFirstOpenPage: state => {
      state.isFirstOpen = false
    },
    removePackParams: () => initialStatePackParams,
  },
})

export const { setPackParams, removePackParams, removeIsFirstOpenPage, setIsFirstOpenPage } =
  packParamsSlice.actions
