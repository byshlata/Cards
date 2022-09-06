import { createAsyncThunk } from '@reduxjs/toolkit'
import { packsListAPI } from 'api'
import {
  isSpinAppLoading,
  resetPackParams,
  RootStoreType,
  setPackData,
  unmountingComponent,
  resetStatePackParams,
  onCloseModalAfterRequest,
} from 'store'
import { AddPackType, EditPackType, PackParamsType } from 'types'
import { isComparisonOfTwoObjects, setErrorResponse } from 'utils'

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
      dispatch(onCloseModalAfterRequest(true))
    }
  }
)

export const addNewPack = createAsyncThunk(
  'modalSlice',
  async (payload: AddPackType, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(onCloseModalAfterRequest(false))
      await packsListAPI.postPackData(payload)

      const state = getState() as RootStoreType
      const packParamsNow = state.packParams

      if (isComparisonOfTwoObjects(resetStatePackParams, packParamsNow)) {
        getPackData(packParamsNow)
      } else {
        dispatch(unmountingComponent())
      }
      dispatch(resetPackParams())
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const editPack = createAsyncThunk(
  'modalSlice',
  async (payload: EditPackType, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      await packsListAPI.putEditPuckName(payload)

      const state = getState() as RootStoreType
      const packParamsNow = state.packParams

      if (isComparisonOfTwoObjects(resetStatePackParams, packParamsNow)) {
        getPackData(packParamsNow)
      } else {
        dispatch(unmountingComponent())
      }
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
