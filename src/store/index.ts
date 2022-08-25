//slice

export { appSlice } from './slice/appSlice'

export { forgotSlice } from './slice/forgotSlice'
export { registrationSlice } from './slice/registrationSlice'

//thunk

export { sendLetterOnEmail } from './thunk/forgotThunk'
export { RegistrationThunk } from './thunk/registrationThunk'
export { authThunk } from './thunk/loginThunk'

//selector

export {
  selectorsIsInitialized,
  selectorIsLoading,
  selectorError,
  selectorEmail,
  selectorIsPasswordSend,
  selectorIsAuth,
} from './selectors/selectors'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export { setInitialized, setErrorMessage, isSpinAppLoading } from './slice/appSlice'

export { removeEmail, sendLetter, isPasswordSend } from './slice/forgotSlice'
