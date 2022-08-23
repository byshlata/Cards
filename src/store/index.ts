//slice

export { appSlice } from './slice/appSlice'

export { forgotSlice } from './slice/forgotSlice'
export { loginSlice } from './slice/loginSlice'

//thunk

export { sendLetterOnEmail } from './thunk/forgotThunk'

//selector

export {
  selectorsIsInitialized,
  selectorIsLoading,
  selectorError,
  selectorEmail,
  selectorIsPasswordSend,
} from './selectors/selectors'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export { setInitialized, setErrorMessage, isSpinAppLoading } from './slice/appSlice'

export { removeEmail, sendLetter, isPasswordSend } from './slice/forgotSlice'
