import { createAsyncThunk } from '@reduxjs/toolkit'
import { isSpinAppLoading, setPackData } from 'store'

import { addPackAPI } from '../../api/addPackAPI'
import { AddPackType } from '../../types'
import { setErrorResponse } from '../../utils'

export const addNewPackThank = createAsyncThunk(
  'modalSlice',
  async (payload: AddPackType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await addPackAPI.postPackData(payload)
      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
