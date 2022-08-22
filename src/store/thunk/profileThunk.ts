import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileAPI } from 'api'
import axios from 'axios'
import { setInitialized } from 'store'

export const getAuthUser = createAsyncThunk(
  'authUserSlice/getAuthUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await profileAPI.getAuthUser()
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        //dispatch();
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message)
      }
    } finally {
      dispatch(setInitialized(false))
    }
  }
)
