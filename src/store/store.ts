import { configureStore } from '@reduxjs/toolkit'

import { profileSlice } from './slice/profileSlice'

import { appSlice, forgotSlice, packParamsSlice, packSlice, registrationSlice } from 'store'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    forgot: forgotSlice.reducer,
    registration: registrationSlice.reducer,
    profile: profileSlice.reducer,
    pack: packSlice.reducer,
    packParams: packParamsSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
