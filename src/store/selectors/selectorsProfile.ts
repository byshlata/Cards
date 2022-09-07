import { RootStoreType } from 'store/store'

export const selectorUserName = (state: RootStoreType): string => state.profile.name

export const selectorUserEmail = (state: RootStoreType): string => state.profile.email

export const selectorAuthUserId = (state: RootStoreType): string => state.profile._id

export const selectorAvatarUser = (state: RootStoreType): string | undefined => state.profile.avatar
