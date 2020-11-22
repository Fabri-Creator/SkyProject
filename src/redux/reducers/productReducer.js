import { SET_PRODUCT_COLLECTION } from "../actions/productAction";

const defaultCollection = "";

function productReducer(state = defaultCollection, action) {
  switch (action.type) {
    case SET_PRODUCT_COLLECTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default productReducer;
