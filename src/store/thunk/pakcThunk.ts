import { createAsyncThunk } from '@reduxjs/toolkit'
import { packAPI } from 'api'
import { isSpinAppLoading, RootStoreType, setPackParams } from 'store'
import { setPackData } from 'store/slice/packSlice'
import { PackParamsType } from 'types'
import { setErrorResponse } from 'utils'

export const getPackData = createAsyncThunk(
  'packSlice/getPackData',
  async (payload: PackParamsType, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(setPackParams(payload))
      const { packParams } = getState() as RootStoreType
      const res = await packAPI.getPackData(packParams)
      console.log(res)
      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
