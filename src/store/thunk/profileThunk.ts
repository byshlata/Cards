import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileAPI } from 'api'
import axios from 'axios'
import { setInitialized } from 'store'

import { API_CONFIG } from '../../api/config'
import { InitialStateType, setUserAvatar, setUserName } from '../slice/profileSlice'

export const getAuthUser = createAsyncThunk(
  'authUserSlice/getAuthUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await profileAPI.getAuthUser()
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        //dispatch();
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message)
      }
    } finally {
      dispatch(setInitialized(false))
    }
  }
)

export const fetchProfilePage = createAsyncThunk(
  'profileSlice/fetchProlePage',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true))
      const res = await profileAPI.getAuthUser()
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        dispatch(setUserName(res.name))
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message)
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
      const res = await API_CONFIG.put('', {
        name: userName,
        avatar: userAvatar,
      })
      if ('error' in res) {
        return rejectWithValue(res.error)
      } else {
        dispatch(setUserName(res.data.updatedUser.name))
        //dispatch(setUserAvatar(res.data.updatedUser.avatar))
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message)
      }
    } finally {
      dispatch(setInitialized(false))
    }
  }
)
