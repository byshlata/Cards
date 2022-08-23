import { configureStore } from '@reduxjs/toolkit'

import { appSlice } from './slice/appSlice'
import { profileSlice } from './slice/profileSlice'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    profile: profileSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
