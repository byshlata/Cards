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
  isResetFilter: false,
}

export const resetStatePackParams: PackParamsInitialType = {
  user_id: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 8,
  sortPacks: '',
  packName: '',
  isFirstOpen: true,
  isResetFilter: false,
}

export const packParamsSlice = createSlice({
  name: 'packParamsSlice',
  initialState: initialStatePackParams,
  reducers: {
    setPackParams: (state, action: PayloadAction<PackParamsType>) => ({
      ...state,
      ...action.payload,
    }),
    setIsFirstOpenPage: (state) => {
      state.isFirstOpen = true
    },
    removeIsFirstOpenPage: (state) => {
      state.isFirstOpen = false
    },
    resetPageElement: (state) => {
      state.isResetFilter = true
    },
    renderPageElement: (state) => resetStatePackParams,
    removePackParams: () => initialStatePackParams,
  },
})

export const {
  setPackParams,
  removePackParams,
  removeIsFirstOpenPage,
  setIsFirstOpenPage,
  resetPageElement,
  renderPageElement,
} = packParamsSlice.actions
