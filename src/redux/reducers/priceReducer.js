import { SET_PRICE } from "../actions/priceAction";

const defaultPrice = 0;

function priceReducer(state = defaultPrice, action) {
  switch (action.type) {
    case SET_PRICE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
export default priceReducer;
