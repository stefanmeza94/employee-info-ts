import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import reducer from './reducer';
import { ActionType } from './action-type';
import { MdSignalWifiStatusbarNull } from 'react-icons/md';
import { Action } from 'history';

const user = localStorage.getItem('user');

interface AppProviderProps {
  children: React.ReactNode;
}

export const initialState = {
  loading: false,
  showSidebar: false,
  user: user ? JSON.parse(user) : null,
  name: '',
  surname: '',
  email: '',
  showAlert: false,
  alertType: '',
  alertText: '',
  employees: [],
};

const AppContext = createContext<any>(initialState);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios instance
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    (config: any) => {
      if (state.user) {
        config.headers.common['Authorization'] = `Bearer ${state.user.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleLogin = async (googleData: any) => {
    const { data } = await axiosInstance.post('/api/google-login', {
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

  const displayAlert = (msg: string, type: string) => {
    dispatch({ type: ActionType.DISPLAY_ALERT, payload: { msg, type } });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: ActionType.CLEAR_ALERT });
    }, 2500);
  };

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    dispatch({ type: ActionType.HANDLE_CHANGE, payload: { name, value } });
  };

  const toggleSidebar = () => {
    dispatch({ type: ActionType.TOGGLE_SIDEBAR });
  };

  const clearInputs = () => {
    dispatch({ type: ActionType.CLEAR_INPUTS });
  };

  const addNewEmplooyee = async () => {
    dispatch({ type: ActionType.CREATE_EMPLOYEE_BEGIN });
    try {
      await axiosInstance.post('/api/users', {
        name: state.name,
        surname: state.surname,
        email: state.email,
      });
      dispatch({ type: ActionType.CREATE_EMPLOYEE_SUCCESS });
      getAllEmployees();
    } catch (error: any) {
      dispatch({
        type: ActionType.CREATE_EMPLOYEE_ERROR,
        payload: { msg: error.request.statusText },
      });
    }
    clearAlert();
  };

  const getAllEmployees = async () => {
    dispatch({ type: ActionType.GET_ALL_EMPLOYEES_BEGIN });
    try {
      const { data } = await axiosInstance.get('/api/users');
      console.log(data);
      dispatch({ type: ActionType.GET_ALL_EMPLOYEES_SUCCESS, payload: data });
    } catch (error) {}
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
        displayAlert,
        clearInputs,
        addNewEmplooyee,
        getAllEmployees,
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
