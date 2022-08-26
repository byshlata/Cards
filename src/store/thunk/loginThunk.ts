import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI } from 'api'
import axios, { AxiosError } from 'axios'
import { isSpinAppLoading } from 'store'
import { setAuth } from 'store/slice/appSlice'
import { LoginType } from 'types'

export const signInOnEmail = createAsyncThunk(
  'loginSlice/signInOnEmail',
  async ({ password, rememberMe, email }: LoginType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      await loginAPI.loginIn({ password, rememberMe, email })
      dispatch(setAuth(true))
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        return rejectWithValue(error)
      } else {
        return rejectWithValue(err.message)
      }
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
