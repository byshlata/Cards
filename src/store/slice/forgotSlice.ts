import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from 'types'

export const initialState: InitialStateType = {
  email: null,
  isPasswordSend: false,
}

export const forgotSlice = createSlice({
  name: 'forgotSlice',
  initialState,
  reducers: {
    sendLetter: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    isPasswordSend: (state) => {
      state.isPasswordSend = true
    },
    removeEmail: () => {
      return initialState
    },
  },
})

export const { sendLetter, removeEmail, isPasswordSend } = forgotSlice.actions

type InitialStateType = {
  email: Nullable<string>
  isPasswordSend: boolean
}
