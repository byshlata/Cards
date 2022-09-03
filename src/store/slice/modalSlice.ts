import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
  addNewPackModal: false,
  editPackModal: false,
  deletePackModal: false,
  addNewCardModal: false,
  editCardModal: false,
  deleteCardModal: false,
}
// type initialStateType = ReturnType<typeof initialState>

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openCloseAddNewPackModal: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.addNewPackModal = action.payload
    },
    removePackData: () => initialState,
  },
})

export const { openCloseAddNewPackModal, removePackData } = modalSlice.actions
