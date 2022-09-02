//slice

export { appSlice } from './slice/appSlice'
export { forgotSlice } from './slice/forgotSlice'
export { registrationSlice } from './slice/registrationSlice'
export { profileSlice } from './slice/profileSlice'
export { packParamsSlice, initialStatePackParams } from './slice/packParamsSlice'
export { packSlice } from './slice/packSlice'
export { cardParamsSlice, initialStateCardParams } from './slice/cardParamsSlice'
export { cardSlice } from './slice/cardSlice'

//thunk

export { sendLetterOnEmail, sendNewPassword } from './thunk/forgotThunk'
export { RegistrationThunk } from './thunk/registrationThunk'
export { fetchProfilePage, changeProfileName, logoutUser } from './thunk/profileThunk'
export { getPackData } from './thunk/pakcThunk'
export { getCardData } from './thunk/cardThunk'

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
  selectorPackName,
  selectorPacksData,
  selectorUserParam_id,
  selectorIsFirsOpen,
  selectorParams,
  selectorTotalCount,
  selectorAvatarUser,
  selectorCurrentPage,
  selectorIsMounting,
  selectorCardData,
  selectorCurrentPageCard,
  selectorParamsCard,
  selectorTotalCountCard,
  selectorTitlePack,
} from './selectors/selectors'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export { setInitialized, isSpinAppLoading, removeErrorMessage, setAuth } from './slice/appSlice'

export { removeEmail, sendLetter, isPasswordSend } from './slice/forgotSlice'

export { setUserData, setUserName, removeUserData } from './slice/profileSlice'

export { registrationUser } from './slice/registrationSlice'

export { removePackData, setPackData } from './slice/packSlice'

export { removeCardData, setCardData } from './slice/cardSlice'

export {
  setPackParams,
  removePackParams,
  removeIsFirstOpenPage,
  setIsFirstOpenPage,
  resetPackParams,
} from './slice/packParamsSlice'

export {
  setCardParams,
  removeCardParams,
  removeIsFirstOpenCardPage,
  setIsFirstOpenCardPage,
  resetCardParams,
} from './slice/cardParamsSlice'

export { mountingComponent, unmountingComponent } from './slice/resetSlice'
