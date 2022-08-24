import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from 'types'

export const initialState: InitialStateType = {
  email: null,
  password: null,
  isLogIn: false,
}

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    loginIn: (state, action: PayloadAction<boolean>) => {
      state.isLogIn = action.payload
    },
    removeEmail: () => {
      return initialState
    },
  },
})

export const { loginIn } = loginSlice.actions

type InitialStateType = {
  email: Nullable<string>
  password: Nullable<string>
  isLogIn: boolean
}
