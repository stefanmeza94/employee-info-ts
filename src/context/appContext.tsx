import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import reducer from './reducer';
import { ActionType } from './action-type';

interface AppProviderProps {
  children: React.ReactNode;
}

export const initialState = {
  showSidebar: false,
  user: null,
};

const AppContext = createContext<any>(initialState);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const handleLogin = async (googleData: any) => {
    const { data } = await authFetch.post('/api/google-login', {
      token: googleData.tokenId,
    });

    dispatch({ type: ActionType.LOGIN_SUCCESS, payload: data });
    localStorage.setItem('user', JSON.stringify(data));
  };

  const handleLoginFailure = () => {
    console.log('Handle login failed!');
  };

  const toggleSidebar = () => {
    dispatch({ type: ActionType.TOGGLE_SIDEBAR });
  };

  return (
    <AppContext.Provider
      value={{ ...state, toggleSidebar, handleLogin, handleLoginFailure }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
