import { RootStoreType } from 'store'
import { BackValueType } from 'types'

export const selectorModalPackId = (state: RootStoreType): string => state.modalPack.idPack

export const selectorModalPackAction = (state: RootStoreType): BackValueType =>
  state.modalPack.action

export const selectorModalPackName = (state: RootStoreType): string => state.modalPack.namePack

export const selectorIsCloseModalPackAfterRequest = (state: RootStoreType): boolean =>
  state.modalPack.isCloseModalPackRequest

export const selectorUserId = (state: RootStoreType): string => state.modalPack.userId

export const selectorCardsCountPack = (state: RootStoreType): number =>
  state.modalPack.cardsCountPack
