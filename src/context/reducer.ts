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
  name: string | null;
  email: string | null;
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
  country: string | null;
  city: string | null;
  role: string | null;
  project: string | null;
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
        email: '',
        seniority: 'intern',
        role: 'employee',
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
    case ActionType.CANNOT_DELETE_YOURSELF:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'Cannot delete yourself!',
        alertType: 'danger',
      };
    case ActionType.SET_EDIT_EMPLOYEE:
      const curEmployeeEdit = state.employees.find(
        (employee) => employee.id === action.payload.id
      );
      return {
        ...state,
        isEditing: true,
        employeeEditId: curEmployeeEdit?.id,
        name: curEmployeeEdit?.name || '',
        email: curEmployeeEdit?.email || '',
        seniority: curEmployeeEdit?.seniority?.toLowerCase() || '',
        role: curEmployeeEdit?.role?.toLowerCase() || '',
      };
    case ActionType.CLEAR_EDIT:
      return {
        ...state,
        isEditing: false,
        name: '',
        email: '',
        role: 'employee',
        seniority: 'intern',
      };
    case ActionType.EDIT_EMPLOYEE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Employee updated successfully',
      };
    case ActionType.CLEAR_INPUT:
      return {
        ...state,
        [action.payload]: '',
      };
    case ActionType.CREATE_PROJECT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'New Project Created Successfully',
        alertType: 'success',
      };
    case ActionType.CREATE_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'danger',
      };
    default:
      return state;
  }
};

export default reducer;
