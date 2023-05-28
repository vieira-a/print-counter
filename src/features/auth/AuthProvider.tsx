import {
  IUserLogin,
  IUserSession,
  IAuthProvider,
} from "@/common/interfaces/IAuth";
import AuthContext from "@/contexts/authContext";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }: IAuthProvider) {
  const [userLogin, setUserLogin] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  const [userSession, setUserSession] = useState<IUserSession>({
    _id: "",
    email: "",
    name: "",
    token: "",
  });

  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    const isUserAuthenticated = async () => {
      if (userSession.token) {
        setUserAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userSession.token));
      }
    };
    isUserAuthenticated();
  }, [userSession, userSession.token]);

  useEffect(() => {
    const userInLocalStorage = localStorage.getItem("user");
    if (userInLocalStorage) {
      setUserAuthenticated(true);
    } else {
      setUserAuthenticated(false);
    }
  }, []);

  const handleUserLogout = () => {
    localStorage.removeItem("user");
    setUserAuthenticated(false);
  };

  console.log(userSession);

  const authContextValue = {
    userLogin,
    setUserLogin,
    userSession,
    setUserSession,
    userAuthenticated,
    setUserAuthenticated,
    handleUserLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
