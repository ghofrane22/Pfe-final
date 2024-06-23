import {
  GET_CATEGORY,
  GET_CLIENT_USERS,
  GET_HANDMADE_AUTHORIZATION_USERS,
  GET_HANDMADE_USERS,
  GET_LOCATION,
  GET_OFFERS,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "../constants/actions-types";

const initialState = {
  handMadeUsers: undefined,
  handeMadeAuthorization: undefined,
  clientUsers: undefined,
  location: undefined,
  category: undefined,
  offers: undefined,
  updateSuccess: false,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        clientUsers: state.clientUsers.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
        updateSuccess: true,
        error: null,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updateSuccess: false,
        error: action.payload,
      };
    case GET_OFFERS:
      return {
        ...state,
        offers: payload,
      };
    case GET_CLIENT_USERS:
      return {
        ...state,
        clientUsers: payload.data,
      };
    case GET_HANDMADE_USERS:
      return {
        ...state,
        handMadeUsers: payload.data,
      };
    case GET_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case GET_HANDMADE_AUTHORIZATION_USERS:
      return {
        ...state,
        handeMadeAuthorization: payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
