import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserResponseType } from 'types'

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
    removeUserData: () => initialState,
  },
})

export const { setUserName, removeUserData, setUserData } = profileSlice.actions
