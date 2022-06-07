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
  | GetAllEmployeesError;
