import { RootStoreType } from 'store/store'

export const selectorCardQuestion = (state: RootStoreType): string => state.cardParams.cardQuestion

export const selectorSortCards = (state: RootStoreType): string => state.cardParams.sortCards
