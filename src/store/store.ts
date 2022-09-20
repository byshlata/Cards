import { configureStore } from '@reduxjs/toolkit'
import {
  appSlice,
  cardParamsSlice,
  cardSlice,
  forgotSlice,
  packParamsSlice,
  packSlice,
  profileSlice,
  registrationSlice,
  usersParamsSlice,
  usersSlice,
} from 'store'
import { learnSlice } from 'store/slice/learnSlice'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    forgot: forgotSlice.reducer,
    registration: registrationSlice.reducer,
    profile: profileSlice.reducer,
    pack: packSlice.reducer,
    packParams: packParamsSlice.reducer,
    card: cardSlice.reducer,
    cardParams: cardParamsSlice.reducer,
    learn: learnSlice.reducer,
    users: usersSlice.reducer,
    usersParams: usersParamsSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
