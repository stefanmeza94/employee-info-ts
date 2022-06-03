import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import { ActionType } from './action-type';

interface AppProviderProps {
  children: React.ReactNode;
}

export const initialState = {
  showSidebar: false,
};

const AppContext = createContext<any>(initialState);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: ActionType.TOGGLE_SIDEBAR });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
