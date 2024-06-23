import { GET_HANDMADE_OFFERS } from "../constants/actions-types";
import axios from "axios";
import { successToast, url } from "../../utils";
import { get_hand_Made_service } from "./Actions";

export const add_new_project =
  ({ addProject, handleShow, id, setLoading }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.put(
        `${url}/api/v1/handMade/add-project`,
        addProject,
        config
      );
      console.log(result);
      setLoading(false);
      successToast("Project Added ! ");
      handleShow();
      dispatch(get_hand_Made_service(id));
    } catch (error) {
      console.log(error);
    }
  };

export const update_profile =
  ({ updateProfile, id, setLoading }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.put(
        `${url}/api/v1/handMade/update-profile`,
        updateProfile,
        config
      );
      setLoading(false);
      successToast("Profile updated ! ");
      dispatch(get_hand_Made_service(id));
    } catch (error) {
      console.log(error);
    }
  };
export const delete_project =
  ({ userId, id }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.put(
        `${url}/api/v1/handMade/delete-project/${id}`,
        "",
        config
      );
      successToast("Project Deleted ! ");
      dispatch(get_hand_Made_service(userId));
    } catch (error) {
      console.log(error);
    }
  };
export const get_handMade_offers = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(
      `${url}/api/v1/handMade/handMade-offers`,
      config
    );
    dispatch({ type: GET_HANDMADE_OFFERS, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const udpate_handMade_offer =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.put(
        `${url}/api/v1/handMade/update-offer/${id}`,
        { status },
        config
      );
      successToast("Offer Updated ! ");
      dispatch(get_handMade_offers());
    } catch (error) {
      console.log(error);
    }
  };
