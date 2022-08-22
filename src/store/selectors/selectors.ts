import { useSelector } from 'react-redux'
import { RootStoreType } from 'store'
import { Nullable } from 'types'

export const selectorsIsInitialized = (state: RootStoreType): boolean => state.app.isInitialized

export const selectorIsLoading = (state: RootStoreType): boolean => state.app.isLoading

export const selectorError = (state: RootStoreType): Nullable<string> => state.app.error

export const selectorEmail = (state: RootStoreType): Nullable<string> => state.forgot.email

export const selectorIsPasswordSend = (state: RootStoreType): boolean => state.forgot.isPasswordSend

export const selectorIsAuth = (state: RootStoreType): boolean => state.app.isAuth

export const userName = (state: RootStoreType): Nullable<string> => state.profile.name
