import { createAsyncThunk } from '@reduxjs/toolkit'
import { registrationAPI } from 'api'
import axios, { AxiosError } from 'axios'
import { isSpinAppLoading } from 'store'
import { regisrtationUser } from 'store/slice/registrationSlice'

import { RegistrationType } from '../../types'

export const RegistrationThunk = createAsyncThunk(
  'registrationSlice/regisrtationUser',
  async ({ email, password }: RegistrationType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await registrationAPI.registerUser({ email, password })

      dispatch(regisrtationUser(true))
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        console.log(error)
        rejectWithValue(error)
      } else {
        rejectWithValue(err.message)
      }
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
