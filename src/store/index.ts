//slice

export { appSlice } from './slice/appSlice'
export { forgotSlice } from './slice/forgotSlice'
export { registrationSlice } from './slice/registrationSlice'
export { profileSlice } from './slice/profileSlice'
export { packParamsSlice, START_VALUE_PACK_PARAMS } from './slice/packParamsSlice'
export { packSlice } from './slice/packSlice'

//thunk

export { sendLetterOnEmail, sendNewPassword } from './thunk/forgotThunk'
export { RegistrationThunk } from './thunk/registrationThunk'
export { fetchProfilePage, changeProfileName, logoutUser } from './thunk/profileThunk'
export { getPackData } from './thunk/pakcThunk'

//selector

export {
  selectorsIsInitialized,
  selectorIsLoading,
  selectorError,
  selectorEmail,
  selectorIsPasswordSend,
  selectorIsAuth,
  selectorUserName,
  selectorUserEmail,
  selectorUserId,
  selectorIsRegistration,
  selectorCardPacksTotalCount,
  selectorMinCardsOnPack,
  selectorMaxCardsOnPack,
  selectorPageCount,
} from './selectors/selectors'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export { setInitialized, isSpinAppLoading, removeErrorMessage, setAuth } from './slice/appSlice'

export { removeEmail, sendLetter, isPasswordSend } from './slice/forgotSlice'

export { removePackData, setPackData } from './slice/packSlice'

export { setUserData, setUserName, removeUserData } from './slice/profileSlice'

export { registrationUser } from './slice/registrationSlice'

export { setPackParams, removePackParams } from './slice/packParamsSlice'
