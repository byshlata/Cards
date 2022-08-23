import { log } from 'util'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState: InitialStateType = {
  userName: '',
}

export const changeProfileName = createAsyncThunk(
  'profileSlice/changeProfileName',
  async (userName: string, { rejectWithValue, dispatch }) => {
    const res = await axios.put('http://localhost:7542/2.0/auth/me')
    dispatch(setUserName(res.data.updatedUser.name))
  }
)

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload
    },
  },
  extraReducers: {
    // @ts-ignore
    [changeProfileName.pending]: () => console.log('pending'),
    // @ts-ignore
    [changeProfileName.fulfilled]: () => console.log('fulfilled'),
    // @ts-ignore
    [changeProfileName.rejected]: () => console.log('rejected'),
  },
})

export const { setUserName } = profileSlice.actions
export default profileSlice.reducer
type InitialStateType = {
  userName: string
}
