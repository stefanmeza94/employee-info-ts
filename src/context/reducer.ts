import { ActionType } from './action-type';
import { Action } from './actions';
import { initialState } from './appContext';

interface ReducerState {
  showSidebar: boolean;
  user: {} | null;
  name: string;
  surname: string;
  email: string;
}

const reducer = (state: ReducerState = initialState, action: Action) => {
  switch (action.type) {
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
