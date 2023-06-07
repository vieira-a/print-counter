import { useState } from "react";
import { IUserProvider, IUserRegister } from "@/common/interfaces/IUser";
import UserContext from "@/contexts/userContext";

export default function UserProvider({ children }: IUserProvider) {
  const [userRegister, setUserRegister] = useState<IUserRegister>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const userContextValue = {
    userRegister,
    setUserRegister,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
