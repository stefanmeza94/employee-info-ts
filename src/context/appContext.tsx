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

  const handleLogin = async (googleData: any) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
    dispatch({ type: ActionType.LOGIN_SUCCESS, payload: data });

    localStorage.setItem('logindata', JSON.stringify(data));
  };

  const handleLoginFailure = (err: any) => {
    console.log(err);
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
