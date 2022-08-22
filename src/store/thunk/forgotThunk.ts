import { createAsyncThunk } from '@reduxjs/toolkit'
import { forgotAPI } from 'api'
import axios from 'axios'
import { isSpinAppLoading, sendLetter, setInitialized } from 'store'

export const sendLetterOnEmail = createAsyncThunk(
  'forgotSlice/sendLetterOnEmail',
  async (email: string, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await forgotAPI.sendLetter(email)
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        dispatch(sendLetter(email))
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
