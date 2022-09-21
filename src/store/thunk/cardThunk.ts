import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardAPI } from 'api'
import {
  initialStateCardParams,
  isCloseModal,
  isSpinAppLoading,
  removeCardParams,
  RootStoreType,
  setCardData,
  setCardParams,
} from 'store'
import { CardParamsType, CardShortType, EditCardType } from 'types'
import { setErrorResponse } from 'utils'

export const getCardData = createAsyncThunk(
  'cardSlice/getCardData',
  async (payload: Partial<CardParamsType>, { rejectWithValue, dispatch }) => {
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
      const packParamsNow = state.cardParams
      dispatch(getCardData(packParamsNow))
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
      const packParamsNow = state.cardParams
      dispatch(getCardData(packParamsNow))
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
      dispatch(isCloseModal(false))
      await cardAPI.deleteCard(idCard)

      const state = getState() as RootStoreType

      if (state.card.cards.length === 1) {
        // eslint-disable-next-line no-debugger
        debugger
        dispatch(removeCardParams())
      }
      const packParamsNow = state.cardParams
      dispatch(getCardData(packParamsNow))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
