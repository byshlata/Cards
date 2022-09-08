import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI } from 'api'
import { isSpinAppLoading, setAuth, setUserData } from 'store'
import { LoginType } from 'types'
import { setErrorResponse } from 'utils'

export const authThunk = createAsyncThunk(
  'loginSlice/signInOnEmail',
  async ({ password, rememberMe, email }: LoginType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await loginAPI.loginIn({ password, rememberMe, email })

      dispatch(setAuth(true))
      dispatch(setUserData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
