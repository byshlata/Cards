import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ErrorMessageType } from 'types'

export const initialState: InitialStateType = {
  isLoading: false,
  isInitialized: true,
  isAuth: false,
  error: { message: '' },
  warning: { message: '' },
}

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    isSpinAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    removeErrorMessage: (state) => {
      state.error = { message: '' }
    },
    setWarningMessage: (state, action: PayloadAction<string>) => {
      state.warning = { message: action.payload }
    },
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/rejected'),
      (state, action: PayloadAction<string>) => {
        state.error = { message: action.payload }
      }
    )
  },
})

export const { isSpinAppLoading, removeErrorMessage, setInitialized, setAuth, setWarningMessage } =
  appSlice.actions

type InitialStateType = {
  isLoading: boolean
  isInitialized: boolean
  isAuth: boolean
  error: ErrorMessageType
  warning: ErrorMessageType
}
