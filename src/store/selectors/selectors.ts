import {AppRootStateType} from '../store';
import {Nullable} from 'types';


export const selectorsIsAuth = (state: AppRootStateType): boolean => state.app.isAuth;

export const selectorsIsLoading = (state: AppRootStateType): boolean => state.app.isLoading;

export const selectorError = (state: AppRootStateType): Nullable<string> => state.app.error;