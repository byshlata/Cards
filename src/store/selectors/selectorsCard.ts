import { RootStoreType } from 'store/store'
import { CardType } from 'types'

export const selectorCardData = (state: RootStoreType): CardType[] => state.card.cards

export const selectorCardsTotalCount = (state: RootStoreType): number => state.card.cardsTotalCount

export const selectorTitlePack = (state: RootStoreType): string => state.card.packName

export const selectorPackUserId = (state: RootStoreType): string => state.card.packUserId

export const selectorCurrentPageCard = (state: RootStoreType): number => state.card.page

export const selectorCountPageCard = (state: RootStoreType): number => state.card.pageCount
