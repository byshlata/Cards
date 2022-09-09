import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardAPI } from 'api'
import {
  getPackData,
  isCloseModal,
  isSpinAppLoading,
  onCloseModalCardAfterRequest,
  resetStateCardParams,
  RootStoreType,
  setCardData,
  unmountingComponent,
} from 'store'
import { CardParamsType, CardShortType, EditCardType } from 'types'
import { isComparisonOfTwoObjects, setErrorResponse } from 'utils'

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
      dispatch(isCloseModal(true))
    }
  }
)

export const addNewCard = createAsyncThunk(
  'cardSlice/addNewCard',
  async (payload: CardShortType, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(isCloseModal(false))
      await cardAPI.createCard(payload)

      const state = getState() as RootStoreType
      const cardParamsNow = state.cardParams

      if (isComparisonOfTwoObjects(resetStateCardParams, cardParamsNow)) {
        dispatch(getCardData(cardParamsNow))
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

export const editCard = createAsyncThunk(
  'cardSlice/editCard',
  async (payload: EditCardType, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(isCloseModal(false))
      await cardAPI.editCard(payload)

      const state = getState() as RootStoreType
      const cardParamsNow = state.cardParams

      if (isComparisonOfTwoObjects(resetStateCardParams, cardParamsNow)) {
        dispatch(getCardData(cardParamsNow))
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

export const deleteCard = createAsyncThunk(
  'cardSlice/deleteCard',
  async (idCard: string, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(onCloseModalCardAfterRequest(false))
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
