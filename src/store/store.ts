import { configureStore } from '@reduxjs/toolkit'

import { resetSlice } from 'store/slice/resetSlice'

import { modalSlice } from './slice/modalSlice'
import { learnSlice } from './slice/learnSlice'
import { profileSlice } from './slice/profileSlice'

import {
  appSlice,
  forgotSlice,
  packParamsSlice,
  packSlice,
  registrationSlice,
  cardSlice,
  cardParamsSlice,
} from 'store'

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
    cardParams: cardParamsSlice.reducer,
    modal: modalSlice.reducer,
    learn: learnSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
