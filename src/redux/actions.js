import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  googleAuthProvider,
  facebookAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "../firebase";
import * as types from "./actionTypes";

// Register
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

// Login
const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

//signout
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

//set user
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

//goolge signin
const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

//facebook signin
const facebookSignInStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START,
});

const facebookSignInSuccess = (user) => ({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
});

const facebookSignInFail = (error) => ({
  type: types.FACEBOOK_SIGN_IN_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, displayName) => {
  return (dispatch) => {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(auth.currentUser, { displayName });
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};

export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
      });
  };
};

export const logoutInitiate = () => {
  return (dispatch) => {
    dispatch(logoutStart());
    signOut(auth)
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => {
        dispatch(logoutFail(error.message));
      });
  };
};

export const googleSignInitiate = () => {
  return (dispatch) => {
    dispatch(googleSignInStart());
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => {
        dispatch(googleSignInFail(error.message));
      });
  };
};

export const facebookSignInitiate = () => {
  return (dispatch) => {
    dispatch(facebookSignInStart());
    signInWithRedirect(auth, facebookAuthProvider.addScope("user_birthday, email"))
      .then(({ user }) => {
        dispatch(facebookSignInSuccess(user));
      })
      .catch((error) => {
        dispatch(facebookSignInFail(error.message));
      });
  };
};
