import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from 'types'

export const initialState: InitialStateType = {
  isLoading: false,
  isInitialized: false,
  isAuth: false,
  error: '',
}

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    isSpinAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    removeErrorMessage: (state) => {
      state.error = ''
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
        state.error = action.payload as string
      }
    )
  },
})

export const { isSpinAppLoading, removeErrorMessage, setInitialized, setAuth } = appSlice.actions

type InitialStateType = {
  isLoading: boolean
  isInitialized: boolean
  isAuth: boolean
  error: string
}
