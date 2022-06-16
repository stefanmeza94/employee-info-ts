import { ActionType } from './action-type';

interface ToggleSidebar {
  type: ActionType.TOGGLE_SIDEBAR;
}

interface LoginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: {
    user: {
      name: string;
      email: string;
      photo: string;
      role: string;
      token: string;
      id: number;
    };
  };
}

interface HandleLogout {
  type: ActionType.LOGOUT_USER;
}

interface HandleChange {
  type: ActionType.HANDLE_CHANGE;
  payload: {
    name: string;
    value: string;
  };
}

interface DisplayAlert {
  type: ActionType.DISPLAY_ALERT;
}

interface ClearAlert {
  type: ActionType.CLEAR_ALERT;
}

interface ClearInputs {
  type: ActionType.CLEAR_INPUTS;
}

interface CreateEmployeeBegin {
  type: ActionType.CREATE_EMPLOYEE_BEGIN;
}

interface CreateEmployeeSuccess {
  type: ActionType.CREATE_EMPLOYEE_SUCCESS;
}

interface CreateEmployeeError {
  type: ActionType.CREATE_EMPLOYEE_ERROR;
  payload: { msg: string };
}

interface GetAllEmployeesBegin {
  type: ActionType.GET_ALL_EMPLOYEES_BEGIN;
}

interface GetAllEmployeesSuccess {
  type: ActionType.GET_ALL_EMPLOYEES_SUCCESS;
  payload: {
    email: string;
    id: number;
    name: string;
    photo: string;
    role: string;
    seniority: string | null;
  }[];
}

interface GetAllEmployeesError {
  type: ActionType.GET_ALL_EMPLOYEES_ERROR;
  payload: { msg: string };
}

interface DeleteEmployeeBegin {
  type: ActionType.DELETE_EMPLOYEE_BEGIN;
}

interface DeleteEmployeeSucces {
  type: ActionType.DELETE_EMPLOYEE_SUCCESS;
}

interface DeleteEmployeeError {
  type: ActionType.DELETE_EMPLOYEE_ERROR;
  payload: { msg: string };
}

interface CannotDeleteYourself {
  type: ActionType.CANNOT_DELETE_YOURSELF;
}

interface SetEditEmployee {
  type: ActionType.SET_EDIT_EMPLOYEE;
  payload: { id: number };
}

interface EditEmployeeBegin {
  type: ActionType.EDIT_EMPLOYEE_BEGIN;
}

interface EditEmployeeSuccess {
  type: ActionType.EDIT_EMPLOYEE_SUCCESS;
}

interface EditEmployeeError {
  type: ActionType.EDIT_EMPLOYEE_ERROR;
}

interface ClearEdit {
  type: ActionType.CLEAR_EDIT_EMPLOYEE;
}

interface ClearInput {
  type: ActionType.CLEAR_INPUT;
  payload: string;
}

interface CreateProjectBegin {
  type: ActionType.CREATE_PROJECT_BEGIN;
}

interface CreateProjectSuccess {
  type: ActionType.CREATE_PROJECT_SUCCESS;
}

interface CreateProjectError {
  type: ActionType.CREATE_PROJECT_ERROR;
  payload: { msg: string };
}

interface GetAllProjectsBegin {
  type: ActionType.GET_ALL_PROJECTS_BEGIN;
}

interface GetAllProjectsSuccess {
  type: ActionType.GET_ALL_PROJECTS_SUCCESS;
  payload: { name: string; id: number }[];
}

interface GetAllProjectsError {
  type: ActionType.GET_ALL_PROJECTS_ERROR;
  payload: { msg: string };
}

interface DeleteProjectBegin {
  type: ActionType.DELETE_PROJECT_BEGIN;
}

interface DeleteProjectSuccess {
  type: ActionType.DELETE_PROJECT_SUCCESS;
}

interface DeleteProjectError {
  type: ActionType.DELETE_PROJECT_ERROR;
  payload: { msg: string };
}

interface SetEditProject {
  type: ActionType.SET_EDIT_PROJECT;
  payload: { id: number };
}

interface ClearEditCategory {
  type: ActionType.CLEAR_EDIT_CATEGORY;
  payload: { category: string; name: string };
}

interface UpdateProjectBegin {
  type: ActionType.UPDATE_PROJECT_BEGIN;
}

interface UpdateProjectSuccess {
  type: ActionType.UPDATE_PROJECT_SUCCESS;
}
interface UpdateProjectError {
  type: ActionType.UPDATE_PROJECT_ERROR;
  payload: { msg: string };
}

interface CreateCityBegin {
  type: ActionType.CREATE_CITY_BEGIN;
}

interface CreateCitySuccess {
  type: ActionType.CREATE_CITY_SUCCESS;
}

interface CreateCityError {
  type: ActionType.CREATE_CITY_ERROR;
  payload: { msg: string };
}

interface GetAllCitiesBegin {
  type: ActionType.GET_ALL_CITIES_BEGIN;
}

interface GetAllCitiesSuccess {
  type: ActionType.GET_ALL_CITIES_SUCCESS;
  payload: {
    id: number;
    countryId: number;
    name: string;
  }[];
}

interface GetAllCitiesError {
  type: ActionType.GET_ALL_CITIES_ERROR;
  payload: { msg: string };
}

interface DeleteCityBegin {
  type: ActionType.DELETE_CITY_BEGIN;
}

interface DeleteCitySuccess {
  type: ActionType.DELETE_CITY_SUCCESS;
}

interface DeleteCityError {
  type: ActionType.DELETE_CITY_ERROR;
  payload: { msg: string };
}

interface SetEditCity {
  type: ActionType.SET_EDIT_CITY;
  payload: { cityId: number };
}

interface EditCityBegin {
  type: ActionType.EDIT_CITY_BEGIN;
}

interface EditCitySuccess {
  type: ActionType.EDIT_CITY_SUCCESS;
}

interface EditCityError {
  type: ActionType.EDIT_CITY_ERROR;
  payload: { msg: string };
}

interface CreateCountryBegin {
  type: ActionType.CREATE_COUNTRY_BEGIN;
}

interface CreateCountrySuccess {
  type: ActionType.CREATE_COUNTRY_SUCCESS;
}

interface CreateCountryError {
  type: ActionType.CREATE_COUNTRY_ERROR;
  payload: { msg: string };
}

interface GetAllCountriesBegin {
  type: ActionType.GET_ALL_COUNTRIES_BEGIN;
}

interface GetAllCountriesSuccess {
  type: ActionType.GET_ALL_COUNTRIES_SUCCESS;
  payload: {
    id: number;
    name: string;
    cities: {
      id: number;
      name: string;
    }[];
  }[];
}

interface GetAllCountriesError {
  type: ActionType.GET_ALL_COUNTRIES_ERROR;
  payload: { msg: string };
}

interface DeleteCountryBegin {
  type: ActionType.DELETE_COUNTRY_BEGIN;
}

interface DeleteCountrySuccess {
  type: ActionType.DELETE_COUNTRY_SUCCESS;
}

interface DeleteCountryError {
  type: ActionType.DELETE_COUNTRY_ERROR;
  payload: { msg: string };
}

interface EditCountryBegin {
  type: ActionType.EDIT_COUNTRY_BEGIN;
}

interface EditCountrySuccess {
  type: ActionType.EDIT_COUNTRY_SUCCESS;
}

interface EditCountryError {
  type: ActionType.EDIT_COUNTRY_ERROR;
  payload: { msg: string };
}

interface SetEditCountry {
  type: ActionType.SET_EDIT_COUNTRY;
  payload: { countryId: number };
}

export type Action =
  | ToggleSidebar
  | LoginSuccess
  | HandleLogout
  | HandleChange
  | DisplayAlert
  | ClearAlert
  | ClearInputs
  | CreateEmployeeBegin
  | CreateEmployeeSuccess
  | CreateEmployeeError
  | GetAllEmployeesBegin
  | GetAllEmployeesSuccess
  | GetAllEmployeesError
  | DeleteEmployeeBegin
  | DeleteEmployeeSucces
  | DeleteEmployeeError
  | CannotDeleteYourself
  | SetEditEmployee
  | ClearEdit
  | EditEmployeeBegin
  | EditEmployeeSuccess
  | EditEmployeeError
  | ClearInput
  | CreateProjectBegin
  | CreateProjectSuccess
  | CreateProjectError
  | GetAllProjectsBegin
  | GetAllProjectsSuccess
  | GetAllProjectsError
  | DeleteProjectBegin
  | DeleteProjectSuccess
  | DeleteProjectError
  | SetEditProject
  | ClearEditCategory
  | UpdateProjectBegin
  | UpdateProjectSuccess
  | UpdateProjectError
  | CreateCityBegin
  | CreateCitySuccess
  | CreateCityError
  | GetAllCitiesBegin
  | GetAllCitiesSuccess
  | GetAllCitiesError
  | DeleteCityBegin
  | DeleteCitySuccess
  | DeleteCityError
  | SetEditCity
  | EditCityBegin
  | EditCitySuccess
  | EditCityError
  | CreateCountryBegin
  | CreateCountrySuccess
  | CreateCountryError
  | GetAllCountriesBegin
  | GetAllCountriesSuccess
  | GetAllCountriesError
  | DeleteCountryBegin
  | DeleteCountrySuccess
  | DeleteCountryError
  | EditCountryBegin
  | EditCountrySuccess
  | EditCountryError
  | SetEditCountry;
