import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: initialStateType = {
  modalId: '',
  modalDataId: '',
  data: {
    name: '',
  },
}
type initialStateType = {
  modalId: string
  modalDataId?: string | undefined
  data: {
    name: string
  }
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: (
      state,
      {
        payload: {
          modalId,
          modalDataId,
          data: { name },
        },
      }: PayloadAction<initialStateType>
    ) => {
      state.modalId = modalId
      state.modalDataId = modalDataId
      state.data.name = name
    },
    closeModal: (state) => {
      state.modalId = ''
      state.modalDataId = ''
    },
    removePackData: () => initialState,
  },
})

export const { openModal, closeModal, removePackData } = modalSlice.actions
