import { RootStoreType } from 'store/store'
import { CardType } from 'types'

export const selectorCardData = (state: RootStoreType): CardType[] => state.card.cards

export const selectorTotalCountCard = (state: RootStoreType): number => state.card.cardsTotalCount

export const selectorTitlePack = (state: RootStoreType): string => state.card.packName
