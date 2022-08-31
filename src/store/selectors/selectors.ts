import { RootStoreType } from 'store'
import {
  ErrorMessageType,
  Nullable,
  PackParamsInitialType,
  PackResponseType,
  ParamsType,
} from 'types'

export const selectorsIsInitialized = (state: RootStoreType): boolean => state.app.isInitialized

export const selectorIsLoading = (state: RootStoreType): boolean => state.app.isLoading

export const selectorError = (state: RootStoreType): ErrorMessageType => state.app.error

export const selectorEmail = (state: RootStoreType): Nullable<string> => state.forgot.email

export const selectorIsPasswordSend = (state: RootStoreType): boolean => state.forgot.isPasswordSend

export const selectorIsAuth = (state: RootStoreType): boolean => state.app.isAuth

export const selectorUserName = (state: RootStoreType): string => state.profile.name

export const selectorUserEmail = (state: RootStoreType): string => state.profile.email

export const selectorUserId = (state: RootStoreType): string => state.profile._id

export const selectorAvatarUser = (state: RootStoreType): string | undefined => state.profile.avatar

export const selectorIsRegistration = (state: RootStoreType) => state.registration.isRegistration

export const selectorPacksData = (state: RootStoreType): PackResponseType[] => state.pack.cardPacks

export const selectorCardPacksTotalCount = (state: RootStoreType): number =>
  state.pack.cardPacksTotalCount

export const selectorPageCount = (state: RootStoreType): number => state.pack.pageCount

export const selectorMaxCardsOnPack = (state: RootStoreType): number => state.packParams.max

export const selectorMinCardsOnPack = (state: RootStoreType): number => state.packParams.min

export const selectorPackName = (state: RootStoreType): ParamsType<string> =>
  state.packParams.packName

export const selectorUserParam_id = (state: RootStoreType): string => state.packParams.user_id

export const selectorParams = (state: RootStoreType): PackParamsInitialType => state.packParams

export const selectorIsFirsOpen = (state: RootStoreType): boolean => state.packParams.isFirstOpen

export const selectorTotalCount = (state: RootStoreType): number => state.pack.cardPacksTotalCount

export const selectorCurrentPage = (state: RootStoreType): number => state.packParams.page

export const selectorIsMounting = (state: RootStoreType): boolean => state.reset.isMounting
