import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackValueType, DataFormModalType } from 'types'

export const initialState: initialStateType = {
  id: '',
  userId: '',
  action: '',
  name: '',
  isCloseModalRequest: true,
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setDataForFormModal: (state, action: PayloadAction<DataFormModalType>) => ({
      ...state,
      ...action.payload,
    }),
    onCloseModalAfterRequest: (state, action: PayloadAction<boolean>) => {
      state.isCloseModalRequest = action.payload
    },
    closeModal: () => initialState,
  },
})

export const { setDataForFormModal, closeModal, onCloseModalAfterRequest } = modalSlice.actions

type initialStateType = {
  id: string
  userId: string
  action: BackValueType
  name: string
  isCloseModalRequest: boolean
}
