import { createAsyncThunk } from '@reduxjs/toolkit'
import { packAPI } from 'api'
import { isSpinAppLoading, RootStoreType, setPackParams } from 'store'
import { setPackData } from 'store/slice/packSlice'
import { PackParamsType } from 'types'
import { setErrorResponse } from 'utils'

export const getPackData = createAsyncThunk(
  'packSlice/getPackData',
  async (payload: PackParamsType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await packAPI.getPackData(payload)
      console.log(res)
      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
