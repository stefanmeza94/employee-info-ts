import { ActionType } from './action-type';
import { Action } from './actions';
import { initialState } from './appContext';

interface ReducerState {
  loading: boolean;
  showSidebar: boolean;
  user: any | null;
  name: string;
  surname: string;
  email: string;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  employees: {}[];
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
    case ActionType.CREATE_EMPLOYEE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Employee Created!',
      };
    case ActionType.CREATE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ActionType.GET_ALL_EMPLOYEES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
