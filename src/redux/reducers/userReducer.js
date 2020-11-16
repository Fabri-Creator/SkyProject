import { SET_USER_PROFILE } from "../actions/userActions";

const defaultProfile = { email: "", userName: "" };

function userReducer(state = defaultProfile, action) {
  switch (action.type) {
    case SET_USER_PROFILE: {
      const userName = action.payload.split("@")[0];
      return { email: action.payload, userName };
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
