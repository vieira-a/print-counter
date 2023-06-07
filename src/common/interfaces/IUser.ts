import React, { ReactNode } from "react";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
}

export interface IUserContext {
  userRegister: IUserRegister;
  setUserRegister: React.Dispatch<React.SetStateAction<IUserRegister>>;
}

export interface IUserProvider {
  children: ReactNode;
}
