import { SET_USER_PROFILE } from "../actions/userActions";

const defaultProfile = "";

function userReducer(state = defaultProfile, action) {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;

// const userName = action.payload.split("@")[0];
