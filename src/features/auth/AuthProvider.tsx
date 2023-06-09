import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  IUserLogin,
  IUserSession,
  IAuthProvider,
  IUserSessionData,
} from "@/common/interfaces/IAuth";
import { getUserById } from "@/services/serviceAuth";
import AuthContext from "@/contexts/authContext";

export default function AuthProvider({ children }: IAuthProvider) {
  const [userLogin, setUserLogin] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  const [userSession, setUserSession] = useState<IUserSession>({
    _id: "",
    token: "",
    msg: "",
  });

  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const [userSessionData, setUserSessionData] = useState<IUserSessionData>({
    name: "",
    email: "",
    role: "",
    token: "",
  });

  useEffect(() => {
    const isUserAuthenticated = async () => {
      if (userSession.token) {
        setUserAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userSession));
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

  useEffect(() => {
    const handleUserSessionData = async () => {
      const userInLocalStorage = localStorage.getItem("user");
      if (userInLocalStorage) {
        const { _id, token } = JSON.parse(userInLocalStorage);
        const data = await getUserById(_id, token);
        setUserSessionData(data);
      }
    };
    handleUserSessionData();
  }, [userAuthenticated]);

  const handleUserLogout = () => {
    localStorage.removeItem("user");
    setUserAuthenticated(false);
    <Navigate to={"/"} />;
  };

  const authContextValue = {
    userLogin,
    setUserLogin,
    userSession,
    setUserSession,
    userAuthenticated,
    userSessionData,
    setUserSessionData,
    setUserAuthenticated,
    handleUserLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
