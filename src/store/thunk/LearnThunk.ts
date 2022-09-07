import { createAsyncThunk } from '@reduxjs/toolkit'
import { learnAPI } from 'api/learnAPI'
import { isSpinAppLoading } from 'store'
import { LearnRequestType, setLearnData } from 'store/slice/learnSlice'
import { setErrorResponse } from 'utils'

export const getLearnData = createAsyncThunk(
    'learnSlice/getLearnData',
    async (payload: LearnRequestType, {rejectWithValue, dispatch})=> {
        try {
            dispatch(isSpinAppLoading(true))
            const res = await learnAPI.sendGrade(payload.grade, payload.card_id)
            //dispatch(setLearnData(res))
        } catch (e) {
            return setErrorResponse(e, rejectWithValue)
        } finally {
            dispatch(isSpinAppLoading(false))
        }
    }
)