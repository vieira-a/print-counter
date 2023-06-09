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

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface IUserContext {
  userRegister: IUserRegister;
  setUserRegister: React.Dispatch<React.SetStateAction<IUserRegister>>;
  userRole: IUserRole[];
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export interface IUserProvider {
  children: ReactNode;
}
