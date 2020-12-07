import { SET_USER_PROFILE, UNSET_USER_PROFILE } from "../actions/userActions";

const defaultProfile = null;

function userReducer(state = defaultProfile, action) {
  switch (action.type) {
    case SET_USER_PROFILE: {
      if (action.payload) {
        return action.payload;
      } else {
        return state;
      }
    }
    case UNSET_USER_PROFILE: {
      return null;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
