import { createAsyncThunk } from '@reduxjs/toolkit'
import { setInitialized } from 'store'
import { authAPI } from 'api'
import axios from 'axios'

export const getAuthUser = createAsyncThunk(
  'authUserSlice/getAuthUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await authAPI.getAuthUser()

      if (res.error) {
        return rejectWithValue(res.error)
      }
      //dispatch();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message)
      }
    } finally {
      dispatch(setInitialized(false))
    }
  }
)
