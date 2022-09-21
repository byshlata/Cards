import { RootStoreType } from 'store/store'

export const selectorSearchUserName = (state: RootStoreType): string => state.usersParams.userName

export const selectorSortUsers = (state: RootStoreType): string => state.usersParams.sortUsers

export const selectorMaxPacks = (state: RootStoreType): number => state.usersParams.max

export const selectorMinPacks = (state: RootStoreType): number => state.usersParams.min
