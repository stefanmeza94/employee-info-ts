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
}

interface ClearAlert {
  type: ActionType.CLEAR_ALERT;
}

interface ClearInputs {
  type: ActionType.CLEAR_INPUTS;
}

export type Action =
  | ToggleSidebar
  | LoginSuccess
  | HandleLogout
  | HandleChange
  | DisplayAlert
  | ClearAlert
  | ClearInputs;
