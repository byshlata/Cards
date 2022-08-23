import { createAsyncThunk } from '@reduxjs/toolkit'
import { forgotAPI } from 'api'
import axios from 'axios'
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
      const res = await forgotAPI.sendLetter(payload.email, payload.name)
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        dispatch(sendLetter(payload.email))
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

export const sendNewPassword = createAsyncThunk(
  'forgotSlice/sendNewPassword',
  async (payload: RecoveryPasswordType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await forgotAPI.setNewPassword(payload)
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        dispatch(isPasswordSend())
        console.log(res)
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
