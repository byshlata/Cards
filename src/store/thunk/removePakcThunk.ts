import { createAsyncThunk } from '@reduxjs/toolkit'
import { isSpinAppLoading, setPackData } from 'store'

import { removePackAPI } from '../../api/removePackAPI'
import { RemovePackType } from '../../types'
import { setErrorResponse } from '../../utils'

export const removePackThank = createAsyncThunk(
  'modalSlice',
  async (payload: RemovePackType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await removePackAPI.removePackData(payload)
      console.log(res)
      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
