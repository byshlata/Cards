import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from 'types'

export const initialState: InitialStateType = {
  email: null,
}

export const forgotSlice = createSlice({
  name: 'forgotSlice',
  initialState,
  reducers: {
    sendLetter: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    removeEmail: () => {
      return initialState
    },
  },
})

export const { sendLetter, removeEmail } = forgotSlice.actions

type InitialStateType = {
  email: Nullable<string>
}
