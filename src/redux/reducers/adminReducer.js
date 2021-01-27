import { SET_ADMIN } from "../actions/adminAction";

const defaultAdmin = { add: true, product: false };

function adminReducer(state = defaultAdmin, action) {
  switch (action.type) {
    case SET_ADMIN: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
export default adminReducer;
