import { createAsyncThunk } from '@reduxjs/toolkit'

import { learnAPI } from 'api/learnAPI'
import { isSpinAppLoading } from 'store'
import { LearnRequestType, setLearnData } from 'store/slice/learnSlice'
import { setErrorResponse } from 'utils'

export const getLearnData = createAsyncThunk(
  'learnSlice/getLearnData',
  async (payload: LearnRequestType, { rejectWithValue, dispatch }) => {
    dispatch(isSpinAppLoading(true))
    try {
      const res = await learnAPI.sendGrade(payload.grade, payload.card_id)

      dispatch(setLearnData(res.data.updatedGrade))
      //console.log(res.data.updatedGrade)
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
