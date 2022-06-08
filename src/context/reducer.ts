import { GrAttraction } from 'react-icons/gr';
import { StylisPlugin } from 'styled-components';
import { UnaryExpression } from 'typescript';
import { ActionType } from './action-type';
import { Action } from './actions';
import { initialState } from './appContext';

interface ReducerState {
  loading: boolean;
  showSidebar: boolean;
  user: any | null;
  name: string | undefined;
  surname: string;
  email: string;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  employees: {
    country?: string;
    city?: string;
    id: number;
    name: string | undefined;
    photo: string;
    role: string | null;
    seniority: string | null;
    email: string;
  }[];
  isEditing: boolean;
  employeeEditId: number | null | undefined;
  seniority: string | null;
  country: string;
  city: string;
  role: string | null;
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
    case ActionType.GET_ALL_EMPLOYEES_ERROR:
      return {
        ...state,
        loading: false,
        alertText: action.payload.msg,
      };
    case ActionType.DELETE_EMPLOYEE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'Employee deleted successfully',
        alertType: 'success',
      };
    case ActionType.DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'danger',
      };
    case ActionType.SET_EDIT_EMPLOYEE:
      const employee = state.employees.find(
        (employee) => employee.id === action.payload.id
      );
      return {
        ...state,
        isEditing: true,
        employeeEditId: employee?.id,
        name: employee?.name,
        seniority: employee?.seniority || 'intern',
        country: employee?.country || 'Serbia',
        city: employee?.city || 'Serbia',
        role: employee?.role || 'Employee',
      };
    case ActionType.CLEAR_EDIT:
      return {
        ...state,
        isEditing: false,
      };
    default:
      return state;
  }
};

export default reducer;
