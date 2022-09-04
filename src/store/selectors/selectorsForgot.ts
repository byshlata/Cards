import { RootStoreType } from 'store/store'
import { Nullable } from 'types'

export const selectorEmail = (state: RootStoreType): Nullable<string> => state.forgot.email

export const selectorIsPasswordSend = (state: RootStoreType): boolean => state.forgot.isPasswordSend
