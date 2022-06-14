import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import reducer from './reducer';
import { ActionType } from './action-type';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const user = localStorage.getItem('user');

interface AppProviderProps {
  children: React.ReactNode;
}

export const initialState = {
  loading: false,
  showSidebar: false,
  user: user ? JSON.parse(user) : null,
  name: '',
  email: '',
  showAlert: false,
  alertType: '',
  alertText: '',
  employees: [],
  isEditingEmployee: false,
  employeeEditId: null,
  seniorityListOptions: ['intern', 'junior', 'medior', 'senior'],
  seniority: 'intern',
  cityListOptions: ['Nis', 'Beograd', 'Novi Sad', 'Cacak', 'Prokuplje'],
  countryListOptions: ['Srbija', 'Crna Gora', 'Ukrajina', 'Makedonija', 'Nemacka'],
  country: '',
  roleListOptions: ['employee', 'project_manager', 'system_admin'],
  role: 'employee',
  project: '',
  projects: [],
  isEditingProject: false,
  projectEditId: null,
  isEditingCity: false,
  city: '',
  cities: [],
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

  const displayAlert = () => {
    dispatch({ type: ActionType.DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: ActionType.CLEAR_ALERT });
    }, 2500);
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
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
        email: state.email,
        seniority: state.seniority,
        role: state.role,
      });
      dispatch({ type: ActionType.CREATE_EMPLOYEE_SUCCESS });
      clearInputs();
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
      dispatch({ type: ActionType.GET_ALL_EMPLOYEES_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_EMPLOYEES_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const deleteEmployee = async (id: number) => {
    dispatch({ type: ActionType.DELETE_EMPLOYEE_BEGIN });
    if (state.user.id === id) {
      dispatch({ type: ActionType.CANNOT_DELETE_YOURSELF });
      clearAlert();
      return;
    }
    try {
      await axiosInstance.delete(`/api/users/${id}`);
      dispatch({ type: ActionType.DELETE_EMPLOYEE_SUCCESS });
      clearAlert();
      getAllEmployees();
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_EMPLOYEE_ERROR,
        payload: { msg: error.request.statusText },
      });
    }
    clearAlert();
  };

  const setEditEmployee = (id: number) => {
    dispatch({ type: ActionType.SET_EDIT_EMPLOYEE, payload: { id } });
    scrollToTop();
  };

  const editEmployee = async () => {
    dispatch({ type: ActionType.EDIT_EMPLOYEE_BEGIN });
    try {
      await axiosInstance.put(`/api/users/${state.employeeEditId}`, {
        name: state.name,
        email: state.email,
        seniority: state.seniority,
        role: state.role,
      });
      dispatch({ type: ActionType.EDIT_EMPLOYEE_SUCCESS });
      clearEdit();
      getAllEmployees();
    } catch (error: any) {
      dispatch({ type: ActionType.EDIT_EMPLOYEE_ERROR });
    }
    clearAlert();
  };

  const clearEdit = () => {
    dispatch({ type: ActionType.CLEAR_EDIT_EMPLOYEE });
  };

  const clearInput = (name: any) => {
    dispatch({ type: ActionType.CLEAR_INPUT, payload: name });
  };

  const addNewProject = async () => {
    dispatch({ type: ActionType.CREATE_PROJECT_BEGIN });
    try {
      await axiosInstance.post('/api/projects', {
        name: state.project,
      });
      dispatch({ type: ActionType.CREATE_PROJECT_SUCCESS });
      getAllProjects();
    } catch (error: any) {
      dispatch({
        type: ActionType.CREATE_PROJECT_ERROR,
        payload: { msg: error.response.data.arrayError[0].message },
      });
    }
    clearAlert();
  };

  const getAllProjects = async () => {
    dispatch({ type: ActionType.CREATE_PROJECT_BEGIN });
    try {
      const { data } = await axiosInstance('/api/projects');
      dispatch({ type: ActionType.GET_ALL_PROJECTS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_PROJECTS_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const deleteProject = async (id: string) => {
    dispatch({ type: ActionType.DELETE_PROJECT_BEGIN });
    try {
      await axiosInstance.delete(`/api/projects/${id}`);
      dispatch({ type: ActionType.DELETE_PROJECT_SUCCESS });
      getAllProjects();
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_PROJECT_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const setEditProject = (id: number) => {
    dispatch({ type: ActionType.SET_EDIT_PROJECT, payload: { id } });
    scrollToTop();
  };

  const editProject = async () => {
    dispatch({ type: ActionType.UPDATE_PROJECT_BEGIN });
    try {
      await axiosInstance.put(`/api/projects/${state.projectEditId}`, {
        name: state.project,
      });
      dispatch({ type: ActionType.UPDATE_PROJECT_SUCCESS });
      getAllProjects();
      clearEditCategory('isEditingProject', 'project');
    } catch (error: any) {
      dispatch({
        type: ActionType.UPDATE_PROJECT_ERROR,
        payload: { msg: error.message },
      });
    }
  };

  const clearEditCategory = (category: string, name: string) => {
    dispatch({ type: ActionType.CLEAR_EDIT_CATEGORY, payload: { category, name } });
  };

  const addNewCity = async () => {
    dispatch({ type: ActionType.CREATE_CITY_BEGIN });
    try {
      await axiosInstance.post('api/cities', { name: state.city });
      dispatch({ type: ActionType.CREATE_CITY_SUCCESS });
      getAllCities();
    } catch (error: any) {
      dispatch({ type: ActionType.CREATE_CITY_ERROR, payload: { msg: error.message } });
    }
  };

  const getAllCities = async () => {
    dispatch({ type: ActionType.GET_ALL_CITIES_BEGIN });
    try {
      const { data } = await axiosInstance('api/cities');
      dispatch({ type: ActionType.GET_ALL_CITIES_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_CITIES_ERROR,
        payload: { msg: error.message },
      });
    }
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
        deleteEmployee,
        setEditEmployee,
        editEmployee,
        clearEdit,
        clearInput,
        addNewProject,
        getAllProjects,
        deleteProject,
        setEditProject,
        editProject,
        clearEditCategory,
        addNewCity,
        getAllCities,
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
