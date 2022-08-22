import { RootStoreType } from 'store'
import { Nullable } from 'types'

export const selectorsIsInitialized = (state: RootStoreType): boolean => state.app.isInitialized

export const selectorsIsLoading = (state: RootStoreType): boolean => state.app.isLoading

export const selectorError = (state: RootStoreType): Nullable<string> => state.app.error

export const selectorEmail = (state: RootStoreType): Nullable<string> => state.forgot.email
