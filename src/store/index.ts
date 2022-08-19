//slice

export { appSlice } from './slice/appSlice'

//thunk

//selector

export { selectorsIsInitialized, selectorsIsLoading, selectorError } from './selectors/selectors'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export { setInitialized, setErrorMessage, isSpinAppLoading } from './slice/appSlice'
