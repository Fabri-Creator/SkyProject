import firebase from "firebase/app";
import "firebase/auth";

export async function signup(email, password) {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return { success: true, id: result.user.uid };
  } catch (error) {
    console.log("signup -> error", error);
    return { success: false, error: error.code };
  }
}

export function registerAuthObserver(callback) {
  firebase.auth().onAuthStateChanged(callback);
}

export function logout() {
  try {
    firebase.auth().signOut();
  } catch (error) {
    console.log("logout -> error", error);
  }
}

export async function login(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return { success: true };
  } catch (error) {
    console.log("signup -> error", error);
    return { success: false, error: error.code };
  }
}
