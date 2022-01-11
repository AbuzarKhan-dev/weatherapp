import { GET_DATA } from "./Action";

const initialState = {
  data: {},
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
