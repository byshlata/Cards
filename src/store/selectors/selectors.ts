import { RootStoreType } from 'store'
import { ErrorMessageType, Nullable, PackResponseType, ParamsType } from 'types'

export const selectorsIsInitialized = (state: RootStoreType): boolean => state.app.isInitialized

export const selectorIsLoading = (state: RootStoreType): boolean => state.app.isLoading

export const selectorError = (state: RootStoreType): ErrorMessageType => state.app.error

export const selectorEmail = (state: RootStoreType): Nullable<string> => state.forgot.email

export const selectorIsPasswordSend = (state: RootStoreType): boolean => state.forgot.isPasswordSend

export const selectorIsAuth = (state: RootStoreType): boolean => state.app.isAuth

export const selectorUserName = (state: RootStoreType): string => state.profile.name

export const selectorUserEmail = (state: RootStoreType): string => state.profile.email

export const selectorUserId = (state: RootStoreType): string => state.profile._id

export const selectorIsRegistration = (state: RootStoreType) => state.registration.isRegistration

export const selectorPacksData = (state: RootStoreType): PackResponseType[] => state.pack.cardPacks

export const selectorCardPacksTotalCount = (state: RootStoreType): number =>
  state.pack.cardPacksTotalCount

export const selectorPageCount = (state: RootStoreType): number => state.pack.pageCount

export const selectorMaxCardsOnPack = (
  state: RootStoreType
): ParamsType<number | string> | undefined => state.packParams.max

export const selectorMinCardsOnPack = (
  state: RootStoreType
): ParamsType<number | string> | undefined => state.packParams.min

export const selrctorIsResetFilter (store: RootStoreType): boolean