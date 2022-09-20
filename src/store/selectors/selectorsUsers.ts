import { RootStoreType } from 'store/store'
import { UserType } from 'types'

export const selectorTotalCountUsers = (state: RootStoreType): number => state.users.usersTotalCount

export const selectorUsers = (state: RootStoreType): UserType[] => state.users.users

export const selectorCountPageUsers = (state: RootStoreType): number => state.users.pageCount

export const selectorCurrentPageUsers = (state: RootStoreType): number => state.users.page
