import { RootStoreType } from 'store'

export const selectorModalElementId = (state: RootStoreType): string => state.modal.id
export const selectorModalElementAction = (state: RootStoreType): string => state.modal.action
export const selectorModalElementName = (state: RootStoreType): string => state.modal.name
