import { useContext, useEffect, useState } from "react";
import { IUser, IUserProvider, IUserRegister } from "@/common/interfaces/IUser";
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

  const [users, setUsers] = useState<IUser[]>([
    {
      _id: "",
      name: "",
      email: "",
      role: "",
    },
  ]);

  const { userRole } = useContext(UserContext);

  const { getSessionToken, sessionToken } = useGetSessionToken();

  const userContextValue = {
    userRegister,
    setUserRegister,
    userRole,
    users,
    setUsers,
  };

  useEffect(() => {
    getSessionToken();
  }, [getSessionToken]);

  useEffect(() => {
    const handleGetUsers = async () => {
      if (sessionToken) {
        const dataUsers = await getUser(sessionToken);
        setUsers(dataUsers);
      }
    };
    handleGetUsers();
  }, [sessionToken]);

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
