import { RootStoreType } from 'store/store'
import { PackParamsInitialType, ParamsType } from 'types'

export const selectorCurrentPage = (state: RootStoreType): number => state.packParams.page

export const selectorParams = (state: RootStoreType): PackParamsInitialType => state.packParams

export const selectorIsFirsOpen = (state: RootStoreType): boolean => state.packParams.isFirstOpen

export const selectorUserParam_id = (state: RootStoreType): string => state.packParams.user_id

export const selectorPackName = (state: RootStoreType): ParamsType<string> =>
  state.packParams.packName

export const selectorMaxCardsOnPack = (state: RootStoreType): number => state.packParams.max

export const selectorMinCardsOnPack = (state: RootStoreType): number => state.packParams.min
