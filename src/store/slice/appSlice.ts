import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ErrorMessageType } from 'types'

export const initialState: InitialStateType = {
  isLoading: false,
  isInitialized: true,
  isAuth: false,
  isCloseModalAfterRequest: true,
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
    isCloseModal: (state, action: PayloadAction<boolean>) => {
      state.isCloseModalAfterRequest = action.payload
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

export const {
  isSpinAppLoading,
  removeErrorMessage,
  setInitialized,
  setAuth,
  setWarningMessage,
  isCloseModal,
} = appSlice.actions

type InitialStateType = {
  isLoading: boolean
  isInitialized: boolean
  isCloseModalAfterRequest: boolean
  isAuth: boolean
  error: ErrorMessageType
  warning: ErrorMessageType
}
