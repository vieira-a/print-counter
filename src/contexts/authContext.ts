import { createContext } from "react";
import { IAuthContext } from "@/common/interfaces/IAuth";

const AuthContext = createContext<IAuthContext>({
  userLogin: {
    email: "",
    password: "",
  },
  setUserLogin: () => {
    return;
  },
  userSession: {
    token: "",
    _id: "",
    msg: "",
  },
  setUserSession: () => {
    return;
  },
  userAuthenticated: false,
  setUserAuthenticated: () => {
    return;
  },
  userSessionData: {
    name: "",
    email: "",
    role: "",
  },
  setUserSessionData: () => {
    return;
  },
  handleUserLogout: () => {
    return;
  },
});

AuthContext.displayName = "Auth";

export default AuthContext;
