import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OptionValue } from 'enums'
import { PackParamsType } from 'types'

export const START_VALUE_PACK_PARAMS = {
  user_id: '',
  maxCardsOnPack: 30,
  minCardsOnPack: 0,
  page: 1,
  pageCount: 0,
  sortPacks: '',
  packName: '',
}

export const initialState: PackParamsType = {
  user_id: '',
  max: START_VALUE_PACK_PARAMS.maxCardsOnPack,
  min: START_VALUE_PACK_PARAMS.minCardsOnPack,
  page: START_VALUE_PACK_PARAMS.page,
  pageCount: START_VALUE_PACK_PARAMS.pageCount,
  sortPacks: START_VALUE_PACK_PARAMS.sortPacks,
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
