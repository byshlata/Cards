import { configureStore } from '@reduxjs/toolkit'

import { appSlice } from './slice/appSlice'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
