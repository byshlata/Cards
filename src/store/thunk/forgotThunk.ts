import { createAsyncThunk } from '@reduxjs/toolkit'
import { forgotAPI } from 'api'
import axios, { AxiosError } from 'axios'
import { isPasswordSend, isSpinAppLoading, sendLetter } from 'store'
import { RecoveryPasswordType } from 'types'

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
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        rejectWithValue(error)
      } else {
        rejectWithValue(err.message)
      }
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
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        rejectWithValue(error)
      } else {
        rejectWithValue(err.message)
      }
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
