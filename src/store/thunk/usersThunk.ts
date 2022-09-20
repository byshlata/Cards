import { createAsyncThunk } from '@reduxjs/toolkit'
import { usersAPI } from 'api'
import { isCloseModal, isSpinAppLoading, setUsers } from 'store'
import { UsersParamsType } from 'types'
import { setErrorResponse } from 'utils'

export const getUsers = createAsyncThunk(
  'usersSlice/getUsers',
  async (payload: Partial<UsersParamsType>, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await usersAPI.getUsers(payload)
      dispatch(setUsers(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
      dispatch(isCloseModal(true))
    }
  }
)
