import {
  GET_CLIENT_OFFERS,
  VERIFY_CLIENT_HANDMADE_OFFER,
} from "../constants/actions-types";
import axios from "axios";
import { successToast, url } from "../../utils";
import { get_hand_Made_service } from "./Actions";

export const send_offer_to_handMade =
  ({ offerDetails, handMadeId }) =>
  async () => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.post(
        `${url}/api/v1/client/send-handMade-offer/${handMadeId}`,
        offerDetails,
        config
      );
      successToast("Offer Added !");
    } catch (error) {
      console.log(error);
    }
  };
export const get_client_offers = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(`${url}/api/v1/client/offers`, config);
    dispatch({ type: GET_CLIENT_OFFERS, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const verify_offre_between_client_handMade =
  (id) => async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.get(`${url}/api/v1/client/offer/${id}`, config);
      dispatch({ type: VERIFY_CLIENT_HANDMADE_OFFER, payload: result.data });
    } catch (error) {
      console.log(error);
    }
  };

export const add_feedback_to_handMade = (feedback, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.put(
      `${url}/api/v1/client/add-feedback-to-handMade/${id}`,
      feedback,
      config
    );
    successToast("FeedBack Added !");
    dispatch(get_hand_Made_service(id));
  } catch (error) {
    console.log(error);
  }
};
