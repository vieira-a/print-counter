import { ReactNode } from "react";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserSession {
  _id: string;
  name: string;
  email: string;
  token: string;
  msg?: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
}

export interface IAuthContext {
  userLogin: IUserLogin;
  setUserLogin: React.Dispatch<React.SetStateAction<IUserLogin>>;
  userSession: IUserSession;
  setUserSession: React.Dispatch<React.SetStateAction<IUserSession>>;
  userAuthenticated: boolean;
  setUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAuthProvider {
  children: ReactNode;
}
