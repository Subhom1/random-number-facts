import { countActionTypes } from "./action";

const initialState = {
  main: {},
  country: {},
  countries: [],
};

export default (state = initialState, action) => {
  // console.log(action.payload, "payload");
  switch (action.type) {
    case countActionTypes.SHOW:
      return {
        ...state,
        main: action.payload,
      };
    default:
      return state;
  }
};
