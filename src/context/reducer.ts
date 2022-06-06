import { ActionType } from './action-type';
import { Action } from './actions';
import { initialState } from './appContext';

interface ReducerState {
  showSidebar: boolean;
  user: {} | null;
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
    default:
      return state;
  }
};

export default reducer;
