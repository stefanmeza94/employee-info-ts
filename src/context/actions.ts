import { ActionType } from './action-type';

interface ToggleSidebar {
  type: ActionType.TOGGLE_SIDEBAR;
}

interface LoginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: {
    user: {
      id: number;
      email: string;
      lastName: string;
      name: string;
      token: string;
      location: string;
    };
  };
}

interface HandleLogout {
  type: ActionType.LOGOUT_USER;
}

export type Action = ToggleSidebar | LoginSuccess | HandleLogout;
