import { RootStoreType } from 'store/store'
import { CardParamsInitialType } from 'types'

export const selectorCurrentPageCard = (state: RootStoreType): number => state.cardParams.page

export const selectorParamsCard = (state: RootStoreType): CardParamsInitialType => state.cardParams
