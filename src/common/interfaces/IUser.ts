import React, { ReactNode } from "react";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  role: string;
}

export interface IUserRole {
  id: number | null;
  name: string;
}
[];

export interface IUserContext {
  userRegister: IUserRegister;
  setUserRegister: React.Dispatch<React.SetStateAction<IUserRegister>>;
  userRole: IUserRole[];
}

export interface IUserProvider {
  children: ReactNode;
}
