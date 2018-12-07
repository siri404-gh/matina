import { createAction } from '../utils/helpers';

export const SET_CURRENT_SYSTEM_DATE = 'APP::CURRENT_SYSTEM_DATE';
export const SET_APP_IS_LOADING = 'APP::IS_LOADING';

export const setCurrentSystemDate = createAction(SET_CURRENT_SYSTEM_DATE);
export const setAppIsLoading = createAction(SET_APP_IS_LOADING);