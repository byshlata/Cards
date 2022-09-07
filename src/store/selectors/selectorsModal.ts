import { RootStoreType } from 'store'
import { BackValueType } from 'types'

export const selectorModalElementId = (state: RootStoreType): string => state.modal.id

export const selectorModalElementAction = (state: RootStoreType): BackValueType =>
  state.modal.action

export const selectorModalElementName = (state: RootStoreType): string => state.modal.name

export const selectorIsCloseModalAfterRequest = (state: RootStoreType): boolean =>
  state.modal.isCloseModalRequest

export const selectorUserId = (state: RootStoreType): string => state.modal.userId
