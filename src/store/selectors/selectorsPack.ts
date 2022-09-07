import { RootStoreType } from 'store/store'
import { PackType } from 'types'

export const selectorTotalCount = (state: RootStoreType): number => state.pack.cardPacksTotalCount

export const selectorPacksData = (state: RootStoreType): PackType[] => state.pack.cardPacks

export const selectorCardPacksTotalCount = (state: RootStoreType): number =>
  state.pack.cardPacksTotalCount

export const selectorPageCount = (state: RootStoreType): number => state.pack.pageCount
