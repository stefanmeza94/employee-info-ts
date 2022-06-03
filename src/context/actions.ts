import { ActionType } from './action-type';

interface ToggleSidebar {
  type: ActionType.TOGGLE_SIDEBAR;
}

export type Action = ToggleSidebar;
