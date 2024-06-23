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
import axios from "axios";
import { errorToast, successToast, url } from "../../utils";

export const login =
  ({ loginDetails, navigate }) =>
  (dispatch) => {
    dispatch({ type: LOADING });
    axios
      .post(`${url}/api/v1/auth/login`, loginDetails)
      .then((response) => {
        dispatch({ type: LOGIN_USER, payload: response.data.data });
        dispatch({ type: END_LOADING });
        dispatch(current());
        navigate("/");
      })

      .catch((err) => {
        errorToast(err.response.data.message);
        dispatch({ type: END_LOADING });
      });
  };
export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios
      .get(`${url}/api/v1/auth/current`, config)
      .then((res) => dispatch({ type: CURRENT_USER, payload: res.data.user }))
      .catch((err) => {
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("accessToken");
          window.location.reload();
        }
      });
  } catch (error) {
    console.log(error);
  }
};
export const register =
  ({ signUpDetails, navigate }) =>
  (dispatch) => {
    dispatch({ type: LOADING });
    axios
      .post(`${url}/api/v1/auth/register`, signUpDetails)
      .then((response) => {
        dispatch({ type: END_LOADING });
        successToast("Account created !");
        navigate("/login");
      })

      .catch((err) => {
        console.log(err);
        dispatch({ type: END_LOADING });
      });
  };

export const get_hand_Made_Services = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(
      `${url}/api/v1/auth/get-handMade-services`,
      config
    );

    dispatch({ type: GET_HANDMADE_SERVICES, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const get_hand_Made_service = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(
      `${url}/api/v1/auth/get-handMade-service/${id}`,
      config
    );
    dispatch({ type: GET_HANDMADE_SERVICE_DETAILS, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const get_jobs_list = () => async (dispatch) => {
  try {
    let result = await axios.get(`${url}/api/v1/admin/category`);
    dispatch({ type: GET_JOBS_LIST, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
