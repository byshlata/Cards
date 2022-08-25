import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_CONFIG } from '../../api/config'

export const initialState: InitialStateType = {
  userName: '',
  userAvatar: '',
}

// export const fetchProlePage = createAsyncThunk(
//   'profileSlice/fetchProlePage',
//   async (_, { rejectWithValue, dispatch }) => {
//     const res = await API_CONFIG.post('auth/me', {})
//     dispatch(setUserName(res.data.name))
//   }
// )

// export const changeProfileName = createAsyncThunk(
//   'profileSlice/changeProfileName',
//   async ({ userName, userAvatar }: InitialStateType, { rejectWithValue, dispatch }) => {
//     const res = await API_CONFIG.put('auth/me', {
//       name: userName,
//       avatar: userAvatar,
//     })
//     dispatch(setUserName(res.data.updatedUser.name))
//     dispatch(setUserAvatar(res.data.updatedUser.avatar))
//   }
// )
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
  },
})

export const { setUserName, setUserAvatar } = profileSlice.actions

export type InitialStateType = {
  userName: string
  userAvatar: string
}
