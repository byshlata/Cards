import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardAPI } from 'api'
import { isSpinAppLoading, onCloseModalPackAfterRequest, RootStoreType, setCardData } from 'store'
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
      dispatch(onCloseModalPackAfterRequest(true))
    }
  }
)

export const deleteCard = createAsyncThunk(
  'cardSlice/deleteCard',
  async (idCard: string, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(onCloseModalPackAfterRequest(false))
      await cardAPI.deleteCard(idCard)

      const state = getState() as RootStoreType
      const cardParamsNow = state.cardParams
      dispatch(getCardData(cardParamsNow))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
