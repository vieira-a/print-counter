import React, { ReactNode } from "react";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserSession {
  _id: string;
  token: string;
  msg?: string;
}

export interface IUserSessionData {
  name: string;
  email: string;
  role: string;
}

export interface IAuthContext {
  userLogin: IUserLogin;
  setUserLogin: React.Dispatch<React.SetStateAction<IUserLogin>>;
  userSession: IUserSession;
  setUserSession: React.Dispatch<React.SetStateAction<IUserSession>>;
  userAuthenticated: boolean;
  setUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userSessionData: IUserSessionData;
  setUserSessionData: React.Dispatch<React.SetStateAction<IUserSessionData>>;
  handleUserLogout: () => void;
}

export interface IAuthProvider {
  children: ReactNode;
}
