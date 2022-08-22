import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { profileAPI } from 'api'
import axios from 'axios'

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

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // eslint-disable-next-line no-debugger
      state.name = action.payload.name
      state.email = action.payload.email
      state._id = action.payload._id
    },
    setUserName: (state, action) => {
      state.name = action.payload
    },
    setUserAvatar: (state, action) => {
      state.name = action.payload
    },
  },
  // extraReducers: {
  //   // @ts-ignore
  //   [changeProfileName.pending]: () => console.log('pending'),
  //   // @ts-ignore
  //   [changeProfileName.fulfilled]: () => console.log('fulfilled'),
  //   // @ts-ignore
  //   [changeProfileName.rejected]: () => console.log('rejected'),
  // },
})
export const fetchProlePage = createAsyncThunk(
  'profileSlice/fetchProlePage',
  async (_, { dispatch }) => {
    const res = await profileAPI.getAuthUser()
    console.log({ res: res })
    dispatch(setUserData(res))
  }
)

// export const changeProfileName = createAsyncThunk(
//   'profileSlice/changeProfileName',
//   async ((userName, userAvatar), {dispatch}) => {
//     const res = await axios.put('http://localhost:7542/2.0/auth/me', {
//       name: userName,
//       avatar: userAvatar,
//     })
//   }
// )

export const changeProfileName = createAsyncThunk(
  'profileSlice/changeProfileName',
  async (userName: string, { rejectWithValue, dispatch }) => {
    const res = await axios.put('http://localhost:7542/2.0/auth/me', { name: userName })
    dispatch(setUserName(res.data.updatedUser.name))
  }
)

// export const changeProfileName2 = createAsyncThunk(
//   'profileSlice/changeProfileName',
//   async ({userName: string, userAvatar: string}, {}) =>{
//     const res = await axios.put('http://localhost:7542/2.0/auth/me', {
//       name: userName,
//       avatar: userAvatar,
//     })
//   }
// )

export const { setUserData, setUserName, setUserAvatar } = profileSlice.actions

export default profileSlice.reducer
