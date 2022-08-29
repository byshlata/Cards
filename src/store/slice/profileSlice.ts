import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { API_CONFIG } from '../../api/config'
import { UserResponseType } from '../../types'

export const initialState: UserResponseType = {
  _id: '',
  email: '',
  rememberMe: false,
  isAdmin: false,
  name: '',
  verified: false,
  token: '',
  publicCardPacksCount: 0,
  created: '',
  updated: '',
  __v: 0,
  tokenDeathTime: '',
  avatar: '',
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
    setUserData: (state, action: PayloadAction<UserResponseType>) => action.payload,
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload
    },
    logoutUser: () => {
      return initialState
    },
    setId: (state, action: PayloadAction<string>) => {
      state._id = action.payload
    },
  },
})

export const { setUserName, logoutUser, setUserData, setId } = profileSlice.actions
