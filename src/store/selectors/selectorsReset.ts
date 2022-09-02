import { RootStoreType } from 'store/store'

export const selectorIsMounting = (state: RootStoreType): boolean => state.reset.isMounting
