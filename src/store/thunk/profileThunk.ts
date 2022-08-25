import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileAPI } from 'api'
import axios, { AxiosError } from 'axios'
import { setInitialized } from 'store'

import { InitialStateType, setUserName } from '../slice/profileSlice'

export const fetchProfilePage = createAsyncThunk(
  'profileSlice/fetchProlePage',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await profileAPI.getAuthUser()

      dispatch(setUserName(res.name))
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        rejectWithValue(error)
      } else {
        rejectWithValue(err.message)
      }
    } finally {
      dispatch(setInitialized(false))
    }
  }
)

export const changeProfileName = createAsyncThunk(
  'profileSlice/changeProfileName',
  async ({ userName, userAvatar }: InitialStateType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await profileAPI.changeInformationUser({
        name: userName,
        avatar: userAvatar,
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
      dispatch(setInitialized(false))
    }
  }
)
