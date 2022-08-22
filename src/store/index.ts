//slice

export { appSlice } from './slice/appSlice'

export { forgotSlice } from './slice/forgotSlice'

//thunk

export { sendLetterOnEmail } from './thunk/forgotThunk'

//selector

export {
  selectorsIsInitialized,
  selectorsIsLoading,
  selectorError,
  selectorEmail,
} from './selectors/selectors'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export { setInitialized, setErrorMessage, isSpinAppLoading } from './slice/appSlice'

export { removeEmail, sendLetter } from './slice/forgotSlice'
