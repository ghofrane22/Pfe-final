import { GET_HANDMADE_OFFERS } from "../constants/actions-types";

const initialState = {
  handMadeOffer: undefined,
};

const handMadeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HANDMADE_OFFERS:
      return {
        ...state,
        handMadeOffer: payload,
      };
    default:
      return state;
  }
};

export default handMadeReducer;
