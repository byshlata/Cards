import { createAsyncThunk } from '@reduxjs/toolkit'
import { forgotAPI } from 'api'
import { isPasswordSend, isSpinAppLoading, sendLetter } from 'store'
import { RecoveryPasswordType } from 'types'
import { setErrorResponse } from 'utils'

export const sendLetterOnEmail = createAsyncThunk(
  'forgotSlice/sendLetterOnEmail',
  async (
    payload: {
      name: string
      email: string
    },
    { rejectWithValue, dispatch }
  ) => {
    try {
      dispatch(isSpinAppLoading(true))
      await forgotAPI.sendLetter(payload.email, payload.name)
      dispatch(sendLetter(payload.email))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const sendNewPassword = createAsyncThunk(
  'forgotSlice/sendNewPassword',
  async (payload: RecoveryPasswordType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      await forgotAPI.setNewPassword(payload)
      dispatch(isPasswordSend())
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
