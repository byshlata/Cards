import { configureStore } from '@reduxjs/toolkit'
import {
  appSlice,
  cardParamsSlice,
  cardSlice,
  forgotSlice,
  modalSlice,
  packParamsSlice,
  packSlice,
  profileSlice,
  registrationSlice,
} from 'store'
import { learnSlice } from 'store/slice/learnSlice'
import { resetSlice } from 'store/slice/resetSlice'

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
