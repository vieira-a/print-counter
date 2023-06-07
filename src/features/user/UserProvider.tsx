import { useContext, useState } from "react";
import { IUserProvider, IUserRegister } from "@/common/interfaces/IUser";
import UserContext from "@/contexts/userContext";

export default function UserProvider({ children }: IUserProvider) {
  const [userRegister, setUserRegister] = useState<IUserRegister>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "",
  });

  const { userRole } = useContext(UserContext);

  const userContextValue = {
    userRegister,
    setUserRegister,
    userRole,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
