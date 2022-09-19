import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardParamsType } from 'types'
import { UsersParamsInitialType } from 'types'

export const initialStateUsersParams: UsersParamsInitialType = {
  userName: '',
  sortUsers: '',
  max: 110,
  min: 0,
  page: 1,
  pageCount: 10,
}

export const usersParamsSlice = createSlice({
  name: 'usersParamsSlice',
  initialState: initialStateUsersParams,
  reducers: {
    setUsersParams: (state, action: PayloadAction<Partial<UsersParamsInitialType>>) => ({
      ...state,
      ...action.payload,
    }),
    removeUsersParams: () => initialStateUsersParams,
  },
})

export const { setUsersParams, removeUsersParams } = usersParamsSlice.actions
