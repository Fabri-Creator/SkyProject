import { signup, registerAuthObserver, logout, login } from "../services/auth";
import { addObjectWithId, getObjectById } from "../services/data";

const PROFILES_COLLECTION = "users";

export async function userSignup(email, password, name) {
  const { success, id, error } = await signup(email, password);
  if (success) {
    const result = await addObjectWithId(PROFILES_COLLECTION, id, {
      name,
      email,
    });
    return { success: result };
  }
  return { success: false, error };
}

export function registerAuthStateChangeHandler(callback) {
  registerAuthObserver(callback);
}

export function getUserProfileById(uid) {
  return getObjectById(PROFILES_COLLECTION, uid);
}

export function userLogout() {
  logout();
}

export function userLogin(email, password) {
  return login(email, password);
}

// export async function adminPermition(userItem) {
//   const { admin } = userItem;
//   return admin ? true : false;
// }
