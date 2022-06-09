import { ActionType } from './action-type';

interface ToggleSidebar {
  type: ActionType.TOGGLE_SIDEBAR;
}

interface LoginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: {
    user: {
      name: string;
      email: string;
      photo: string;
      role: string;
      token: string;
      id: number;
    };
  };
}

interface HandleLogout {
  type: ActionType.LOGOUT_USER;
}

interface HandleChange {
  type: ActionType.HANDLE_CHANGE;
  payload: {
    name: string;
    value: string;
  };
}

interface DisplayAlert {
  type: ActionType.DISPLAY_ALERT;
  payload: { msg: string; type: string };
}

interface ClearAlert {
  type: ActionType.CLEAR_ALERT;
}

interface ClearInputs {
  type: ActionType.CLEAR_INPUTS;
}

interface CreateEmployeeBegin {
  type: ActionType.CREATE_EMPLOYEE_BEGIN;
}

interface CreateEmployeeSuccess {
  type: ActionType.CREATE_EMPLOYEE_SUCCESS;
}

interface CreateEmployeeError {
  type: ActionType.CREATE_EMPLOYEE_ERROR;
  payload: { msg: string };
}

interface GetAllEmployeesBegin {
  type: ActionType.GET_ALL_EMPLOYEES_BEGIN;
}

interface GetAllEmployeesSuccess {
  type: ActionType.GET_ALL_EMPLOYEES_SUCCESS;
  payload: {
    email: string;
    id: number;
    name: string;
    photo: string;
    role: string;
    seniority: string | null;
  }[];
}

interface GetAllEmployeesError {
  type: ActionType.GET_ALL_EMPLOYEES_ERROR;
  payload: { msg: string };
}

interface DeleteEmployeeBegin {
  type: ActionType.DELETE_EMPLOYEE_BEGIN;
}

interface DeleteEmployeeSucces {
  type: ActionType.DELETE_EMPLOYEE_SUCCESS;
}

interface DeleteEmployeeError {
  type: ActionType.DELETE_EMPLOYEE_ERROR;
  payload: { msg: string };
}

interface CannotDeleteYourself {
  type: ActionType.CANNOT_DELETE_YOURSELF;
}

interface SetEditEmployee {
  type: ActionType.SET_EDIT_EMPLOYEE;
  payload: { id: number };
}

interface EditEmployeeBegin {
  type: ActionType.EDIT_EMPLOYEE_BEGIN;
}

interface EditEmployeeSuccess {
  type: ActionType.EDIT_EMPLOYEE_SUCCESS;
}

interface EditEmployeeError {
  type: ActionType.EDIT_EMPLOYEE_ERROR;
}

interface ClearEdit {
  type: ActionType.CLEAR_EDIT;
}

export type Action =
  | ToggleSidebar
  | LoginSuccess
  | HandleLogout
  | HandleChange
  | DisplayAlert
  | ClearAlert
  | ClearInputs
  | CreateEmployeeBegin
  | CreateEmployeeSuccess
  | CreateEmployeeError
  | GetAllEmployeesBegin
  | GetAllEmployeesSuccess
  | GetAllEmployeesError
  | DeleteEmployeeBegin
  | DeleteEmployeeSucces
  | DeleteEmployeeError
  | CannotDeleteYourself
  | SetEditEmployee
  | ClearEdit
  | EditEmployeeBegin
  | EditEmployeeSuccess
  | EditEmployeeError;
