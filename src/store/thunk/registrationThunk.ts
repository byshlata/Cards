import { createAsyncThunk } from '@reduxjs/toolkit'
import { registrationAPI } from 'api'
import { isSpinAppLoading, registrationUser } from 'store'
import { RegistrationType } from 'types'
import { setErrorResponse } from 'utils'

export const RegistrationThunk = createAsyncThunk(
  'registrationSlice/registrationUser',
  async ({ email, password }: RegistrationType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await registrationAPI.registerUser({ email, password })

      dispatch(registrationUser(true))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
