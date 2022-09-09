import { RootStoreType } from 'store/store'
import { ErrorMessageType } from 'types'

export const selectorsIsInitialized = (state: RootStoreType): boolean => state.app.isInitialized

export const selectorIsLoading = (state: RootStoreType): boolean => state.app.isLoading

export const selectorError = (state: RootStoreType): ErrorMessageType => state.app.error

export const selectorIsAuth = (state: RootStoreType): boolean => state.app.isAuth

export const selectorWarningMessage = (state: RootStoreType): ErrorMessageType => state.app.warning

export const selectorIsCloseModal = (state: RootStoreType): boolean =>
  state.app.isCloseModalAfterRequest
