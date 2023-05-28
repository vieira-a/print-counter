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
      }
    };
    isUserAuthenticated();
  }, [userSession.token]);

  console.log(userAuthenticated);

  const authContextValue = {
    userLogin,
    setUserLogin,
    userSession,
    setUserSession,
    userAuthenticated,
    setUserAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
