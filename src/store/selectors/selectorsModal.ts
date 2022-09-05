import { RootStoreType } from 'store'

export const getModalId = (state: RootStoreType): string => state.modal.modalId
export const getModalDataId = (state: RootStoreType): string => state.modal.modalDataId || ''
export const getInputName = (state: RootStoreType): string => state.modal.data.name || ''
