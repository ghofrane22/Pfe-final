import {
  GET_CLIENT_OFFERS,
  VERIFY_CLIENT_HANDMADE_OFFER,
} from "../constants/actions-types";

const initialState = {
  clientOffer: undefined,
  verifyClientHandMadeOffer: undefined,
};

const clientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CLIENT_OFFERS:
      return {
        ...state,
        clientOffer: payload,
      };
    case VERIFY_CLIENT_HANDMADE_OFFER:
      return {
        ...state,
        verifyClientHandMadeOffer: payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
