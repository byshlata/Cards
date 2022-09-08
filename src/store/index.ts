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
export { cardParamsSlice, initialStateCardParams } from './slice/cardParamsSlice'
export { cardSlice } from './slice/cardSlice'
export { modalPackSlice } from './slice/modalPackSlice'
export { modalCardSlice } from './slice/modalCardSlice'

//thunk

export { sendLetterOnEmail, sendNewPassword } from './thunk/forgotThunk'
export { RegistrationThunk } from './thunk/registrationThunk'
export { fetchProfilePage, changeProfileName, logoutUser } from './thunk/profileThunk'
export { getPackData, addNewPack, editPack, deletePack } from './thunk/pakcThunk'
export { getCardData, deleteCard } from './thunk/cardThunk'

//selector

export {
  selectorCardData,
  selectorTotalCountCard,
  selectorTitlePack,
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
} from './selectors/selectorsApp'

export { selectorCurrentPageCard, selectorParamsCard } from './selectors/selectorsCardParams'

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
  selectorModalPackAction,
  selectorIsCloseModalPackAfterRequest,
  selectorModalPackName,
  selectorModalPackId,
  selectorUserId,
  selectorCardsCountPack,
} from './selectors/selectorsModalPack'

export {
  selectorIsCloseModalCardRequest,
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
  setDataForFormModalPack,
  onCloseModalPackAfterRequest,
  closeModalPack,
} from './slice/modalPackSlice'

export {
  setDataForFormModalCard,
  closeModalCard,
  onCloseModalCardAfterRequest,
} from './slice/modalCardSlice'
