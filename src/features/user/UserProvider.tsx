import { useContext, useEffect, useState } from "react";
import { IUserProvider, IUserRegister } from "@/common/interfaces/IUser";
import UserContext from "@/contexts/userContext";
import useGetSessionToken from "@/hooks/useGetSessionToken";
import { getUser } from "@/services/serviceUser";

export default function UserProvider({ children }: IUserProvider) {
  const [userRegister, setUserRegister] = useState<IUserRegister>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "",
  });

  const { userRole, users, setUsers } = useContext(UserContext);

  const { getSessionToken, sessionToken } = useGetSessionToken();

  const userContextValue = {
    userRegister,
    setUserRegister,
    userRole,
    users,
    setUsers,
  };

  useEffect(() => {
    const handleGetUsers = async () => {
      getSessionToken();
      if (sessionToken) {
        const dataUsers = await getUser(sessionToken);
        setUsers(dataUsers);
      }
    };
    handleGetUsers();
  }, [getSessionToken, sessionToken, setUsers]);

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
