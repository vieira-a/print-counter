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

  const [shouldUpdateUsers, setShouldUpdateUsers] = useState<boolean | null>(
    null
  );

  const { getSessionToken, sessionToken } = useGetSessionToken();

  const userContextValue = {
    userRegister,
    setUserRegister,
    userRole,
    users,
    setUsers,
    shouldUpdateUsers,
    setShouldUpdateUsers,
  };

  useEffect(() => {
    getSessionToken();
  }, [getSessionToken]);

  useEffect(() => {
    const handleGetUsers = async () => {
      if (sessionToken || shouldUpdateUsers) {
        const dataUsers = await getUser(sessionToken);
        setUsers(dataUsers);
      }
      setShouldUpdateUsers(false);
    };
    handleGetUsers();
  }, [sessionToken, setShouldUpdateUsers, shouldUpdateUsers]);

  console.log("** PROVIDER", shouldUpdateUsers);

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
