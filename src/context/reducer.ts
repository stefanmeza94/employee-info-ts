import { ActionType } from './action-type';
import { Action } from './actions';
import { initialState } from './appContext';

interface ReducerState {
  loading: boolean;
  showSidebar: boolean;
  user: any | null;
  name: string | null;
  email: string | null;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  employees: {
    country?: string;
    city?: string;
    id: number;
    name: string | undefined;
    photo: string;
    role: string | null;
    seniority: string | null;
    email: string;
  }[];
  isEditingEmployee: boolean;
  employeeEditId: number | null | undefined;
  seniority: string | null;
  country: string | null;
  city: string | undefined;
  role: string | null;
  project: string | undefined;
  projects: {
    id: number;
    name: string;
  }[];
  isEditingProject: boolean;
  projectEditId: number | undefined | null;
  isEditingCity: boolean;
  cities: {
    id: number;
    name: string;
    countryId: number;
  }[];
  cityEditId: null | number | undefined;
  isEditingCountry: boolean;
  countryEditId: number | null;
  countries: any;
}

const reducer = (state: ReducerState = initialState, action: Action): ReducerState => {
  switch (action.type) {
    case ActionType.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: 'Please provide all values',
        alertType: 'danger',
      };
    case ActionType.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertText: '',
        alertType: '',
      };
    case ActionType.CLEAR_INPUTS:
      return {
        ...state,
        name: '',
        email: '',
        seniority: 'intern',
        role: 'employee',
      };
    case ActionType.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    case ActionType.HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ActionType.CREATE_EMPLOYEE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Employee Created!',
      };
    case ActionType.CREATE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ActionType.GET_ALL_EMPLOYEES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload,
      };
    case ActionType.GET_ALL_EMPLOYEES_ERROR:
      return {
        ...state,
        loading: false,
        alertText: action.payload.msg,
      };
    case ActionType.DELETE_EMPLOYEE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'Employee deleted successfully!',
        alertType: 'danger',
      };
    case ActionType.DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'danger',
      };
    case ActionType.CANNOT_DELETE_YOURSELF:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'Cannot delete yourself!',
        alertType: 'danger',
      };
    case ActionType.SET_EDIT_EMPLOYEE:
      const editingEmployee = state.employees.find(
        (employee) => employee.id === action.payload.id
      );
      return {
        ...state,
        isEditingEmployee: true,
        employeeEditId: editingEmployee?.id,
        name: editingEmployee?.name || '',
        email: editingEmployee?.email || '',
        seniority: editingEmployee?.seniority?.toLowerCase() || '',
        role: editingEmployee?.role?.toLowerCase() || '',
      };
    case ActionType.CLEAR_EDIT_EMPLOYEE:
      return {
        ...state,
        isEditingEmployee: false,
        name: '',
        email: '',
        role: 'employee',
        seniority: 'intern',
      };
    case ActionType.EDIT_EMPLOYEE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Employee updated successfully!',
      };
    case ActionType.CLEAR_INPUT:
      return {
        ...state,
        [action.payload]: '',
      };
    case ActionType.CREATE_PROJECT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'New Project Created Successfully!',
        alertType: 'success',
      };
    case ActionType.CREATE_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'danger',
      };
    case ActionType.GET_ALL_PROJECTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };
    case ActionType.GET_ALL_PROJECTS_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ActionType.DELETE_PROJECT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'Project deleted successfully!',
        alertType: 'danger',
      };

    case ActionType.DELETE_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'danger',
      };
    case ActionType.SET_EDIT_PROJECT:
      const editingProject = state.projects.find((p) => p.id === action.payload.id);
      return {
        ...state,
        isEditingProject: true,
        projectEditId: editingProject?.id,
        project: editingProject?.name,
      };
    case ActionType.CLEAR_EDIT_CATEGORY:
      return {
        ...state,
        [action.payload.category]: false,
        [action.payload.name]: '',
      };
    case ActionType.UPDATE_PROJECT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'Project Updated Successfully!',
        alertType: 'success',
      };
    case ActionType.UPDATE_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'danger',
      };
    case ActionType.CREATE_CITY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.CREATE_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'New City Created Successfully!',
        alertType: 'success',
      };
    case ActionType.CREATE_CITY_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ActionType.GET_ALL_CITIES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_ALL_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };
    case ActionType.GET_ALL_CITIES_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ActionType.DELETE_CITY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.DELETE_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: 'City deleted successfully!',
      };
    case ActionType.SET_EDIT_CITY:
      const editingCity = state.cities.find((city) => city.id === action.payload.cityId);
      return {
        ...state,
        city: editingCity?.name,
        cityEditId: editingCity?.id,
        isEditingCity: true,
      };
    case ActionType.EDIT_CITY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.EDIT_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'City Was Updated Successfully!',
        alertType: 'success',
      };
    case ActionType.EDIT_CITY_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'danger',
      };
    case ActionType.CREATE_COUNTRY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.CREATE_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: 'New Country Created Successfully!',
        alertType: 'success',
      };
    case ActionType.CREATE_COUNTRY_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'danger',
      };
    case ActionType.GET_ALL_COUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case ActionType.GET_ALL_COUNTRIES_ERROR:
      return {
        ...state,
        loading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    default:
      return state;
  }
};

export default reducer;
