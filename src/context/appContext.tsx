import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import reducer from './reducer';
import { ActionType } from './action-type';

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
  roleListOptions: ['employee', 'project_manager', 'system_admin'],
  role: 'employee',
  project: '',
  projects: [],
  isEditingProject: false,
  projectEditId: null,
  isEditingCity: false,
  city: '',
  cities: [],
  cityEditId: null,
  country: '',
  isEditingCountry: false,
  countries: [],
  countryEditId: null,
  technology: '',
  technologies: [],
  technologyEditId: null,
  isEditingTechnology: false,
};

const AppContext = createContext<any>(initialState);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

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
    navigate('/landing');
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
    clearAlert();
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
      clearAlert();
    }
  };

  const deleteCity = async (id: number) => {
    dispatch({ type: ActionType.DELETE_CITY_BEGIN });
    try {
      await axiosInstance.delete(`/api/cities/${id}`);
      dispatch({ type: ActionType.DELETE_CITY_SUCCESS });
      getAllCities();
    } catch (error: any) {
      dispatch({ type: ActionType.DELETE_CITY_ERROR, payload: { msg: error.message } });
    }
    clearAlert();
  };

  const setEditCity = (id: number) => {
    dispatch({ type: ActionType.SET_EDIT_CITY, payload: { cityId: id } });
    scrollToTop();
  };

  const editCity = async () => {
    dispatch({ type: ActionType.EDIT_CITY_BEGIN });
    try {
      await axiosInstance.put(`/api/cities/${state.cityEditId}`, {
        name: state.city,
      });
      dispatch({ type: ActionType.EDIT_CITY_SUCCESS });
      getAllCities();
      clearEditCategory('isEditingCity', 'city');
    } catch (error: any) {
      dispatch({
        type: ActionType.EDIT_CITY_ERROR,
        payload: {
          msg:
            error.response.data.arrayError[0].message + '. Please choose different name!',
        },
      });
    }
    clearAlert();
  };

  const addNewCountry = async () => {
    dispatch({ type: ActionType.CREATE_COUNTRY_BEGIN });
    try {
      await axiosInstance.post('api/countries', {
        name: state.country,
      });
      dispatch({ type: ActionType.CREATE_COUNTRY_SUCCESS });
      getAllCountries();
    } catch (error: any) {
      dispatch({ type: ActionType.CREATE_COUNTRY_ERROR, payload: { msg: error.msg } });
    }
    clearAlert();
  };

  const getAllCountries = async () => {
    dispatch({ type: ActionType.GET_ALL_COUNTRIES_BEGIN });
    try {
      const { data } = await axiosInstance('api/countries');
      dispatch({ type: ActionType.GET_ALL_COUNTRIES_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_COUNTRIES_ERROR,
        payload: { msg: error.message },
      });
    }
  };

  const deleteCountry = async (id: number) => {
    dispatch({ type: ActionType.DELETE_COUNTRY_BEGIN });
    try {
      await axiosInstance.delete(`api/countries/${id}`);
      dispatch({ type: ActionType.DELETE_COUNTRY_SUCCESS });
      getAllCountries();
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_COUNTRY_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const setEditCountry = (id: number) => {
    dispatch({ type: ActionType.SET_EDIT_COUNTRY, payload: { countryId: id } });
    scrollToTop();
  };

  const editCountry = async () => {
    dispatch({ type: ActionType.EDIT_COUNTRY_BEGIN });
    try {
      await axiosInstance.put(`/api/countries/${state.countryEditId}`, {
        name: state.country,
      });
      dispatch({ type: ActionType.EDIT_COUNTRY_SUCCESS });
      getAllCountries();
      clearEditCategory('isEditingCountry', 'country');
    } catch (error: any) {
      dispatch({ type: ActionType.EDIT_COUNTRY_ERROR, payload: { msg: error.message } });
    }
    clearAlert();
  };

  const addNewTechnology = async () => {
    dispatch({ type: ActionType.CREATE_TECHNOLOGY_BEGIN });
    try {
      await axiosInstance.post('/api/technologies', {
        name: state.technology,
      });
      dispatch({ type: ActionType.CREATE_TECHNOLOGY_SUCCESS });
      getAllTechnologies();
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: ActionType.CREATE_TECHNOLOGY_ERROR,
        payload: {
          msg:
            error.response.data.arrayError[0].message + '. Please Choose Different Name!',
        },
      });
    }
    clearAlert();
  };

  const getAllTechnologies = async () => {
    dispatch({ type: ActionType.GET_ALL_TECHNOLOGIES_BEGIN });
    try {
      const { data } = await axiosInstance('/api/technologies');
      dispatch({ type: ActionType.GET_ALL_TECHNOLOGIES_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ALL_TECHNOLOGIES_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const deleteTechnology = async (id: number) => {
    dispatch({ type: ActionType.DELETE_TECHNOLOGY_BEGIN });
    try {
      await axiosInstance.delete(`/api/technologies/${id}`);
      dispatch({ type: ActionType.DELETE_TECHNOLOGY_SUCCESS });
      getAllTechnologies();
    } catch (error: any) {
      dispatch({
        type: ActionType.DELETE_TECHNOLOGY_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const setEditTechnology = (id: number) => {
    dispatch({ type: ActionType.SET_EDIT_TECHNOLOGY, payload: { technologyId: id } });
    scrollToTop();
  };

  const editTechnology = async () => {
    dispatch({ type: ActionType.EDIT_TECHNOLOGY_BEGIN });
    try {
      await axiosInstance.put(`/api/technologies/${state.technologyEditId}`, {
        name: state.technology,
      });
      dispatch({ type: ActionType.EDIT_TECHNOLOGY_SUCCESS });
      clearEditCategory('isEditingTechnology', 'technology');
      getAllTechnologies();
    } catch (error: any) {
      dispatch({
        type: ActionType.EDIT_TECHNOLOGY_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const RemoveFromProjectManager = async (id: number) => {
    const removingUser = state.employees.find((employee: any) => employee.id === id);
    try {
      await axiosInstance.put(`/api/users/${id}`, {
        name: removingUser?.name,
        email: removingUser?.email,
        role: 'employee',
        seniority: removingUser?.seniority?.toLowerCase(),
      });
      getAllEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const RemoveFromSystemAdmin = async (id: number) => {
    const removingUser = state.employees.find((employee: any) => employee.id === id);
    try {
      await axiosInstance.put(`/api/users/${id}`, {
        name: removingUser?.name,
        email: removingUser?.email,
        role: 'employee',
        seniority: removingUser?.seniority?.toLowerCase(),
      });

      if (removingUser?.id === state.user.id) {
        handleLogout();
        return;
      } else {
        getAllEmployees();
      }
    } catch (error) {
      console.log(error);
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
        deleteCity,
        setEditCity,
        editCity,
        addNewCountry,
        getAllCountries,
        deleteCountry,
        editCountry,
        setEditCountry,
        addNewTechnology,
        getAllTechnologies,
        deleteTechnology,
        setEditTechnology,
        editTechnology,
        RemoveFromProjectManager,
        RemoveFromSystemAdmin,
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
