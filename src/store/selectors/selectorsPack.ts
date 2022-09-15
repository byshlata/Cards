import { RootStoreType } from 'store/store'
import { PackType } from 'types'

export const selectorTotalCountPagePack = (state: RootStoreType): number =>
  state.pack.cardPacksTotalCount

export const selectorPacksData = (state: RootStoreType): PackType[] => state.pack.cardPacks

export const selectorCountPagePack = (state: RootStoreType): number => state.pack.pageCount

export const selectorCurrentPagePack = (state: RootStoreType): number => state.pack.page
