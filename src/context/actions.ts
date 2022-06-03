import { ActionType } from './action-type';

interface ToggleSidebar {
  type: ActionType.TOGGLE_SIDEBAR;
}

interface LoginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: {
    user: {
      email: string;
      lastName: string;
      name: string;
    };
    token: string;
    location: string;
  };
}

export type Action = ToggleSidebar | LoginSuccess;
