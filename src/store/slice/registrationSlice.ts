import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from 'types'

export const initialState: InitialStateType = {
  email: null,
  password: null,
  isRegistration: false,
}

export const registrationSlice = createSlice({
  name: 'registrationSlice',
  initialState,
  reducers: {
    registrationUser: (state, action: PayloadAction<boolean>) => {
      state.isRegistration = action.payload
    },
  },
})

export const { registrationUser } = registrationSlice.actions

type InitialStateType = {
  email: Nullable<string>
  password: Nullable<string>
  isRegistration: boolean
}
