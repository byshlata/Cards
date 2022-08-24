import { configureStore } from '@reduxjs/toolkit'
import { appSlice, forgotSlice, loginSlice, registrationSlice } from 'store'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    forgot: forgotSlice.reducer,
    login: loginSlice.reducer,
    registration: registrationSlice.reducer,
  },
})

export type RootStoreType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
