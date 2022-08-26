import { configureStore } from '@reduxjs/toolkit'
import { appSlice, forgotSlice, registrationSlice } from 'store'

import { profileSlice } from './slice/profileSlice'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    forgot: forgotSlice.reducer,
    registration: registrationSlice.reducer,
    profile: profileSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
