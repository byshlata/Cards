import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileAPI } from 'api'
import axios, { AxiosError } from 'axios'
import { setInitialized } from 'store'

export const getAuthUser = createAsyncThunk(
  'authUserSlice/getAuthUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await profileAPI.getAuthUser()
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        rejectWithValue(error)
      } else {
        rejectWithValue(err.message)
      }
    } finally {
      dispatch(setInitialized(false))
    }
  }
)
