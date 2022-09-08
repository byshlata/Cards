import { RootStoreType } from 'store'
import { BackValueType } from 'types'

export const selectorModalCardId = (state: RootStoreType): string => state.modalCard.idCard

export const selectorModalCardAction = (state: RootStoreType): BackValueType =>
  state.modalCard.action

export const selectorModalCardQuestion = (state: RootStoreType): string =>
  state.modalCard.questionCard

export const selectorIsCloseModalCardRequest = (state: RootStoreType): boolean =>
  state.modalCard.isCloseModalCardRequest
