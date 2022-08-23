import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI } from 'api'
import axios from 'axios'
import { isSpinAppLoading } from 'store'
import { loginIn } from 'store/slice/loginSlice'

import { LoginType } from '../../types'

export const signInOnEmail = createAsyncThunk(
  'loginSlice/signInOnEmail',
  async ({ password, rememberMe, email }: LoginType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await loginAPI.loginIn({ password, rememberMe, email })
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        dispatch(loginIn(true))
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message)
      }
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
