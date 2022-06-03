import { ActionType } from './action-type';
import { Action } from './actions';
import { initialState } from './appContext';

interface ReducerState {
  showSidebar: boolean;
}

const reducer = (state: ReducerState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    default:
      return state;
  }
};

export default reducer;
