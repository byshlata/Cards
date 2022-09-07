import { configureStore } from '@reduxjs/toolkit'

import { learnSlice } from './slice/learnSlice'
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
    learn: learnSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.store = store
