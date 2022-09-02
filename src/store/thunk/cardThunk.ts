import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardAPI } from 'api'
import { isSpinAppLoading, setCardData } from 'store'
import { CardParamsType } from 'types'
import { setErrorResponse } from 'utils'

export const getCardData = createAsyncThunk(
  'cardSlice/getCardData',
  async (payload: CardParamsType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await cardAPI.getCardData(payload)
      dispatch(setCardData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
