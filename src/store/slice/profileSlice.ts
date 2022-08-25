import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { API_CONFIG } from '../../api/config'

export const initialState: InitialStateType = {
  userName: '',
  userAvatar: '',
}

export const authData = {
  email: 'nya-admin@nya.nya',
  password: '1qazxcvBG',
  remember: true,
}

export type authDataType = {
  email: string
  password: string
  remember: boolean
}

export const testLogin = createAsyncThunk(
  'profileSlice/testLogin',
  async (authData: authDataType, { rejectWithValue, dispatch }) => {
    const res = await API_CONFIG.post('auth/login', {
      email: authData.email,
      password: authData.password,
      remember: authData.remember,
    })
  }
)

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      state.userAvatar = action.payload
    },
    logoutUser: () => {
      return initialState
    },
  },
})

export const { setUserName, logoutUser } = profileSlice.actions

export type InitialStateType = {
  userName: string
  userAvatar: string
}
