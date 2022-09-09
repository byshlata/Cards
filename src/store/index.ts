//slice

export { appSlice } from './slice/appSlice'
export { forgotSlice } from './slice/forgotSlice'
export { registrationSlice } from './slice/registrationSlice'
export { profileSlice } from './slice/profileSlice'
export {
  packParamsSlice,
  initialStatePackParams,
  resetStatePackParams,
} from './slice/packParamsSlice'
export { packSlice } from './slice/packSlice'
export {
  cardParamsSlice,
  initialStateCardParams,
  resetStateCardParams,
} from './slice/cardParamsSlice'
export { cardSlice } from './slice/cardSlice'
export { modalCardSlice } from './slice/modalCardSlice'

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
  selectorTotalCountCard,
  selectorTitlePack,
  selectorPackUserId,
} from './selectors/selectorsCard'

export {
  selectorCardPacksTotalCount,
  selectorPageCount,
  selectorPacksData,
  selectorTotalCount,
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
  selectorCurrentPageCard,
  selectorParamsCard,
  selectorCardQuestion,
} from './selectors/selectorsCardParams'

export {
  selectorCurrentPage,
  selectorIsFirsOpen,
  selectorParams,
  selectorUserParam_id,
  selectorMaxCardsOnPack,
  selectorPackName,
  selectorMinCardsOnPack,
} from './selectors/selectorsPackParams'

export { selectorIsRegistration } from './selectors/selectorsRegistration'

export {
  selectorIsCloseModalCardAfterRequest,
  selectorModalCardAction,
  selectorModalCardId,
  selectorModalCardQuestion,
} from './selectors/selectorsModalCard'

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

export {
  setDataForFormModalCard,
  closeModalCard,
  onCloseModalCardAfterRequest,
} from './slice/modalCardSlice'
