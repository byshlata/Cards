import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackValueType, DataFormModalType } from 'types'

export const initialState: initialStateType = {
  id: '',
  action: '',
  name: '',
  isCloseModalRequest: true,
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<DataFormModalType>) => ({
      ...state,
      ...action.payload,
    }),
    onCloseModalAfterRequest: (state, action: PayloadAction<boolean>) => {
      state.isCloseModalRequest = action.payload
    },
    closeModal: () => initialState,
  },
})

export const { openModal, closeModal, onCloseModalAfterRequest } = modalSlice.actions

type initialStateType = {
  id: string
  action: BackValueType
  name: string
  isCloseModalRequest: boolean
}
