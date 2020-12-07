import {
  SET_ORDER,
  SET_NEW_ORDER,
  SET_SUBSTRACT_ORDER,
} from "../actions/orderAction";

const orderDefault = [];

function orderReducer(state = orderDefault, action) {
  switch (action.type) {
    case SET_ORDER: {
      return action.payload;
    }
    case SET_NEW_ORDER: {
      return action.payload;
    }
    case SET_SUBSTRACT_ORDER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default orderReducer;
