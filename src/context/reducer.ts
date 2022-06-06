import { ActionType } from './action-type';
import { Action } from './actions';
import { initialState } from './appContext';

interface ReducerState {
  showSidebar: boolean;
  user: any | null;
  name: string;
  surname: string;
  email: string;
  showAlert: boolean;
  alertText: string;
  alertType: string;
}

const reducer = (state: ReducerState = initialState, action: Action): ReducerState => {
  switch (action.type) {
    case ActionType.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: 'Please provide all values',
        alertType: 'danger',
      };
    case ActionType.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertText: '',
        alertType: '',
      };
    case ActionType.CLEAR_INPUTS:
      return {
        ...state,
        name: '',
        surname: '',
        email: '',
      };
    case ActionType.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    case ActionType.HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
