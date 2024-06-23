import {
  CURRENT_USER,
  END_LOADING,
  ERROR,
  GET_HANDMADE_SERVICES,
  GET_HANDMADE_SERVICE_DETAILS,
  GET_JOBS_LIST,
  LOADING,
  LOGIN_USER,
} from "../constants/actions-types";

const initialState = {
  user: {},
  userLoading: true,
  isAuth: false,
  loading: false,
  role: "",
  error: undefined,
  handMadeServices: undefined,
  serviceDetails: undefined,
  jobsList: undefined,
};

const LoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      localStorage.setItem("accessToken", payload);
      return {
        ...state,
        loading: true,
        isAuth: true,
        role: payload.role,
        error: undefined,
      };
    case CURRENT_USER:
      return {
        ...state,
        loading: false,
        user: payload,
        userLoading: false,
        isAuth: true,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_JOBS_LIST:
      return {
        ...state,
        jobsList: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GET_HANDMADE_SERVICES:
      return {
        ...state,
        handMadeServices: payload,
      };
    case GET_HANDMADE_SERVICE_DETAILS:
      return {
        ...state,
        serviceDetails: payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
