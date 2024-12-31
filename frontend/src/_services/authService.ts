import { Credentials } from "@/_interfaces/Interface";
import { Axios } from "./callerService";

import { AppDispatch } from "@/_redux/store";
import {
  login as loginAction,
  logout as logoutAction,
} from "@/_redux/authSlice";

const login = async (
  data: Credentials,
  rememberMe: boolean,
  dispatch: AppDispatch
) => {
  try {
    const resp = await Axios.post("/login", data);
    const token = resp.data.body.token;

    saveUserData(token, data.email, rememberMe);

    //Mise à jour de l'état
    dispatch(
      loginAction({
        email: data.email,
        token,
      })
    );

    return resp;
  } catch {
    throw new Error("Login failed");
  }
};

const logout = (dispatch: AppDispatch) => {
  const rememberme = localStorage.getItem("rememberme");

  if (rememberme) {
    localStorage.removeItem("token");
  } else {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  }
  localStorage.removeItem("user");
  sessionStorage.removeItem("token");

  //Mise à jour de l'état
  dispatch(logoutAction());
};

const getToken = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  return token;
};

const getEmail = () => {
  const email = localStorage.getItem("email");
  return email;
};

const saveUserData = (token: string, email: string, rememberMe: boolean) => {
  if (rememberMe) {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  } else {
    localStorage.removeItem("email");
    sessionStorage.setItem("token", token);
    // console.log("token dans le session storage")
  }
};

const isLogged = () => {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");
  return !!token;
};

export const authService = {
  login,
  logout,
  getToken,
  getEmail,
  saveUserData,
  isLogged,
};
