import { configureStore } from '@reduxjs/toolkit'
import {
  appSlice,
  cardParamsSlice,
  cardSlice,
  forgotSlice,
  modalCardSlice,
  modalPackSlice,
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
    reset: resetSlice.reducer,
    pack: packSlice.reducer,
    packParams: packParamsSlice.reducer,
    card: cardSlice.reducer,
    cardParams: cardParamsSlice.reducer,
    modalPack: modalPackSlice.reducer,
    modalCard: modalCardSlice.reducer,
    learn: learnSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
