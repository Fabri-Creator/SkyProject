import { SET_ADMIN } from "../actions/adminAction";

const defaultAdmin = "Add";

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
