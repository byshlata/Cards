import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersResponseType } from 'types'

export const initialState: UsersResponseType = {
  users: [],
  usersTotalCount: 0,
  maxPublicCardPacksCount: 0,
  minPublicCardPacksCount: 0,
  page: 1,
  pageCount: 10,
  token: '',
  tokenDeathTime: '',
}

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UsersResponseType>) => action.payload,
    removeUsersData: () => initialState,
  },
})

export const { setUsers, removeUsersData } = usersSlice.actions
