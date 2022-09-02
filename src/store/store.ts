import { configureStore } from '@reduxjs/toolkit'
import {
  appSlice,
  cardParamsSlice,
  cardSlice,
  forgotSlice,
  packParamsSlice,
  packSlice,
  registrationSlice,
} from 'store'
import { resetSlice } from 'store/slice/resetSlice'

import { profileSlice } from './slice/profileSlice'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    forgot: forgotSlice.reducer,
    registration: registrationSlice.reducer,
    profile: profileSlice.reducer,
    pack: packSlice.reducer,
    packParams: packParamsSlice.reducer,
    reset: resetSlice.reducer,
    card: cardSlice.reducer,
    cardParam: cardParamsSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
