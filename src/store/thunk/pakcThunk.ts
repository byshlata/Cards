import { createAsyncThunk } from '@reduxjs/toolkit'
import { packsListAPI } from 'api'
import { isSpinAppLoading } from 'store'
import { setPackData } from 'store/slice/packSlice'
import { AddPackType, EditPackType, PackParamsType } from 'types'
import { setErrorResponse } from 'utils'

export const getPackData = createAsyncThunk(
  'packSlice/getPackData',
  async (payload: PackParamsType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await packsListAPI.getPackData(payload)
      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const addNewPack = createAsyncThunk(
  'modalSlice',
  async (payload: AddPackType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await packsListAPI.postPackData(payload)
      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const editPack = createAsyncThunk(
  'modalSlice',
  async (payload: EditPackType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await packsListAPI.putEditPuckName(payload)
      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
