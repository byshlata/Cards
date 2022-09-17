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
export { getPackData, addNewPack, editPack, deletePack } from './thunk/packThunk'
export { getCardData, deleteCard, editCard, addNewCard } from './thunk/cardThunk'
export { authThunk } from './thunk/loginThunk'

//selector

export {
  selectorCardData,
  selectorCardsTotalCount,
  selectorTitlePack,
  selectorPackUserId,
  selectorCurrentPageCard,
  selectorCountPageCard,
} from './selectors/selectorsCard'

export {
  selectorTotalCountPagePack,
  selectorCountPagePack,
  selectorCurrentPagePack,
  selectorPacksData,
} from './selectors/selectorsPack'

export { selectorEmail, selectorIsPasswordSend } from './selectors/selectorsForgot'

export { selectorIsMounting } from './selectors/selectorsReset'

export {
  selectorAuthUserId,
  selectorUserName,
  selectorUserEmail,
  selectorAvatarUser,
} from './selectors/selectorsProfile'

export {
  selectorsIsInitialized,
  selectorIsLoading,
  selectorError,
  selectorIsAuth,
  selectorWarningMessage,
  selectorIsCloseModal,
} from './selectors/selectorsApp'

export {
  selectorCurrentPage,
  selectorPackParams,
  selectorUserParam_id,
  selectorMaxCardsOnPack,
  selectorPackName,
  selectorMinCardsOnPack,
} from './selectors/selectorsPackParams'

export { selectorCardQuestion, selectorSortCards } from './selectors/selectorsCardParams'

export { selectorIsRegistration } from './selectors/selectorsRegistration'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export {
  setInitialized,
  isSpinAppLoading,
  removeErrorMessage,
  setAuth,
  setWarningMessage,
  isCloseModal,
} from './slice/appSlice'

export { removeEmail, sendLetter, isPasswordSend } from './slice/forgotSlice'

export { setUserData, setUserName, removeUserData } from './slice/profileSlice'

export { registrationUser } from './slice/registrationSlice'

export { removePackData, setPackData } from './slice/packSlice'

export { removeCardData, setCardData } from './slice/cardSlice'

export { setPackParams, removePackParams } from './slice/packParamsSlice'

export { setCardParams, removeCardParams } from './slice/cardParamsSlice'

export { mountingComponent, unmountingComponent } from './slice/resetSlice'
