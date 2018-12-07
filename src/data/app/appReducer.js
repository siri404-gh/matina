import { handleActions, updateProperty } from '../utils/helpers';
import state from '../store/state';
import {
  SET_CURRENT_SYSTEM_DATE,
  SET_APP_IS_LOADING,
} from './appActions';

const setCurrentSystemDate = (state, action) => updateProperty([ 'currentSystemDate' ], action.payload, state);
const setAppIsLoading = (state, action) => updateProperty([ 'isLoading' ], action.payload, state);

export default handleActions({
  [SET_CURRENT_SYSTEM_DATE]: setCurrentSystemDate,
  [SET_APP_IS_LOADING]: setAppIsLoading,
}, state.app);
