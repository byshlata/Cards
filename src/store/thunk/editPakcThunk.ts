import { createAsyncThunk } from '@reduxjs/toolkit'
import { isSpinAppLoading, setPackData } from 'store'

import { addPackAPI } from '../../api/addPackAPI'
import { editPackAPI } from '../../api/editPackAPI'
import { EditPackType } from '../../types'
import { setErrorResponse } from '../../utils'

export const editPackThank = createAsyncThunk(
  'modalSlice',
  async (payload: EditPackType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await editPackAPI.putEditPuckName(payload)
      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
