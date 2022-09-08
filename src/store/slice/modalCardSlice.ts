import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackValueType, DataFormModalCardType } from 'types'

export const initialState: initialStateType = {
  idCard: '',
  action: '',
  questionCard: '',
  isCloseModalCardRequest: true,
}

export const modalCardSlice = createSlice({
  name: 'modalCardSlice',
  initialState,
  reducers: {
    setDataForFormModalCard: (state, action: PayloadAction<DataFormModalCardType>) => ({
      ...state,
      ...action.payload,
    }),
    onCloseModalCardAfterRequest: (state, action: PayloadAction<boolean>) => {
      state.isCloseModalCardRequest = action.payload
    },
    closeModalCard: () => initialState,
  },
})

export const { setDataForFormModalCard, closeModalCard, onCloseModalCardAfterRequest } =
  modalCardSlice.actions

type initialStateType = {
  idCard: string
  action: BackValueType
  questionCard: string
  isCloseModalCardRequest: boolean
}
