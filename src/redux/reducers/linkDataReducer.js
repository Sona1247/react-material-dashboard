import { SIDEBAR_LINK } from "../actions/actionTypes";

const initialState = {
  key: 0,
};

const linkDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_LINK:
      return { ...state, key: action.key };
    default:
      return state;
  }
};

export default linkDataReducer;
