import { createContext } from "react";
import { IUserContext } from "@/common/interfaces/IUser";

const UserContext = createContext<IUserContext>({
  userRegister: {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "",
  },
  setUserRegister: (userRegister) => {
    return userRegister;
  },
  userRole: [
    {
      id: 1,
      name: "default",
    },
    {
      id: 2,
      name: "admin",
    },
  ],
});

UserContext.displayName = "User";

export default UserContext;
