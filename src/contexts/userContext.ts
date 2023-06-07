import { createContext } from "react";
import { IUserContext } from "@/common/interfaces/IUser";

const UserContext = createContext<IUserContext>({
  userRegister: {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  },
  setUserRegister: (userRegister) => {
    return userRegister;
  },
});

UserContext.displayName = "User";

export default UserContext;
