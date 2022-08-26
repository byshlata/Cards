import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI, profileAPI } from 'api'
import axios, { AxiosError } from 'axios'
import { isSpinAppLoading, setInitialized } from 'store'

import { setAuth } from '../slice/appSlice'
import { removeUserData, setUserData, setUserName } from '../slice/profileSlice'

export const fetchProfilePage = createAsyncThunk(
  'profileSlice/fetchProlePage',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await profileAPI.getAuthUser()
      dispatch(setAuth(true))
      dispatch(setUserData(res))
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        return rejectWithValue(error)
      } else {
        return rejectWithValue(err.message)
      }
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
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        rejectWithValue(error)
      } else {
        rejectWithValue(err.message)
      }
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
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        rejectWithValue(error)
      } else {
        rejectWithValue(err.message)
      }
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
