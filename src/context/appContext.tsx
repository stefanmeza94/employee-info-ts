import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import reducer from './reducer';
import { ActionType } from './action-type';

const user = localStorage.getItem('user');

interface AppProviderProps {
  children: React.ReactNode;
}

export const initialState = {
  showSidebar: false,
  user: user ? JSON.parse(user) : null,
  name: '',
  surname: '',
  email: '',
};

const AppContext = createContext<any>(initialState);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios instance
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

  const handleLogout = () => {
    dispatch({ type: ActionType.LOGOUT_USER });
    localStorage.removeItem('user');
  };

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    dispatch({ type: ActionType.HANDLE_CHANGE, payload: { name, value } });
  };

  const toggleSidebar = () => {
    dispatch({ type: ActionType.TOGGLE_SIDEBAR });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        handleLogin,
        handleLoginFailure,
        handleLogout,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
