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
    name: "",
    email: "",
  },
  setUserSession: () => {
    return;
  },
  userAuthenticated: false,
  setUserAuthenticated: () => {
    return;
  },
});

AuthContext.displayName = "Auth";

export default AuthContext;
