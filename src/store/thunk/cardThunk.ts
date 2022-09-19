import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardAPI } from 'api'
import { isCloseModal, isSpinAppLoading, setCardData } from 'store'
import { CardParamsType, CardShortType, EditCardType } from 'types'
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
      dispatch(isCloseModal(true))
    }
  }
)

export const addNewCard = createAsyncThunk(
  'cardSlice/addNewCard',
  async (payload: CardShortType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(isCloseModal(false))
      await cardAPI.createCard(payload)
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const editCard = createAsyncThunk(
  'cardSlice/editCard',
  async (payload: EditCardType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(isCloseModal(false))
      await cardAPI.editCard(payload)
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const deleteCard = createAsyncThunk(
  'cardSlice/deleteCard',
  async (idCard: string, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(isCloseModal(false))
      await cardAPI.deleteCard(idCard)
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
