import { createAsyncThunk } from '@reduxjs/toolkit'
import { registrationAPI } from 'api'
import axios from 'axios'
import { isSpinAppLoading } from 'store'
import { regisrtationUser } from 'store/slice/registrationSlice'

import { RegistrationType } from '../../types'

export const RegistrationThunk = createAsyncThunk(
  'registrationSlice/regisrtationUser',
  async ({ email, password }: RegistrationType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await registrationAPI.registerUser({ email, password })
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        dispatch(regisrtationUser(true))
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
