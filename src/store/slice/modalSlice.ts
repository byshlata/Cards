import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackValueType } from 'types'

export const initialState: initialStateType = {
  id: '',
  action: '',
  name: '',
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<initialStateType>) => action.payload,
    closeModal: () => initialState,
  },
})

export const { openModal, closeModal } = modalSlice.actions

type initialStateType = {
  id: string
  action: BackValueType
  name: string
}
