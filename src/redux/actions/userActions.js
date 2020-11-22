export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const UNSET_USER_PROFILE = "UNSET-USER-PROFILE";

export function setUserProfile(userProfile) {
  return { type: SET_USER_PROFILE, payload: userProfile };
}

export function unsetUserProfile() {
  return { type: UNSET_USER_PROFILE };
}
