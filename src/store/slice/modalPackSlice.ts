import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackValueType, DataFormModalPackType } from 'types'

export const initialState: initialStateType = {
  idPack: '',
  userId: '',
  action: '',
  namePack: '',
  cardsCountPack: 0,
  isCloseModalPackRequest: true,
}

export const modalPackSlice = createSlice({
  name: 'modalPackSlice',
  initialState,
  reducers: {
    setDataForFormModalPack: (state, action: PayloadAction<DataFormModalPackType>) => ({
      ...state,
      ...action.payload,
    }),
    onCloseModalPackAfterRequest: (state, action: PayloadAction<boolean>) => {
      state.isCloseModalPackRequest = action.payload
    },
    closeModalPack: () => initialState,
  },
})

export const { setDataForFormModalPack, closeModalPack, onCloseModalPackAfterRequest } =
  modalPackSlice.actions

type initialStateType = {
  idPack: string
  userId: string
  action: BackValueType
  namePack: string
  cardsCountPack: number
  isCloseModalPackRequest: boolean
}
