import { createAsyncThunk } from '@reduxjs/toolkit'

import { setAuth } from '../slice/appSlice'

import { loginAPI, profileAPI } from 'api'
import { isSpinAppLoading, setInitialized, removeUserData, setUserData, setUserName } from 'store'
import { setErrorResponse } from 'utils'

export const fetchProfilePage = createAsyncThunk(
  'profileSlice/fetchProlePage',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await profileAPI.getAuthUser()

      dispatch(setAuth(true))
      dispatch(setUserData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(setInitialized(false))
    }
  }
)

export const changeProfileName = createAsyncThunk(
  'profileSlice/changeProfileName',
  async (name: string, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await profileAPI.changeInformationUser({
        name,
      })

      dispatch(setUserName(res.updatedUser.name))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const logoutUser = createAsyncThunk(
  'profileSlice/logoutUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      await loginAPI.loginOut()
      dispatch(removeUserData())
      dispatch(setAuth(false))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
