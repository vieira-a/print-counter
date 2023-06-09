import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactNode, useContext } from "react";
import DefaultPage from "./components/DefaultPage";
import App from "./App";
import ModelProvider from "./features/model/ModelProvider";
import ModelForm from "./features/model/ModelForm";
import Printer from "./features/printer/Printer";
import PrinterProvider from "./features/printer/PrinterProvider";
import { CounterProvider } from "./features/counter/CounterProvider";
import AuthContext from "./contexts/authContext";
import AuthProvider from "./features/auth/AuthProvider";
import UserProvider from "./features/user/UserProvider";
import PrinterForm from "./features/printer/PrinterForm";
import PrinterFormEdit from "./features/printer/PrinterFormEdit";
import Counter from "./features/counter/Counter";
import CounterForm from "./features/counter/CounterForm";
import Login from "./features/auth/Login";
import User from "./features/user/User";
import Register from "./features/user/Register";
import Model from "./features/model/Model";
import ModelFormEdit from "./features/model/ModelFormEdit";

export default function AppRouter() {
  interface IPrivate {
    children: ReactNode;
  }

  const Private = ({ children }: IPrivate) => {
    const { userAuthenticated } = useContext(AuthContext);

    if (!userAuthenticated) {
      return <Navigate to={"/login"} />;
    }
    return <>{children}</>;
  };

  const PrivateAdmin = ({ children }: IPrivate) => {
    const { userAuthenticated, userSessionData } = useContext(AuthContext);
    const isAdmin = userSessionData.role === "admin";

    if (!userAuthenticated || !isAdmin) {
      return <Navigate to={"/"} />;
    }
    return <>{children}</>;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <ModelProvider>
          <PrinterProvider>
            <CounterProvider>
              <Routes>
                <Route path="/" element={<DefaultPage />}>
                  <Route
                    index
                    element={
                      <Private>
                        <App />
                      </Private>
                    }
                  />
                  <Route
                    path="model"
                    element={
                      <Private>
                        <Model />
                      </Private>
                    }
                  />
                  <Route
                    path="model/create"
                    element={
                      <Private>
                        <ModelForm />
                      </Private>
                    }
                  />
                  <Route
                    path="model/edit/:id"
                    element={
                      <Private>
                        <ModelFormEdit />
                      </Private>
                    }
                  />
                  <Route
                    path="printer"
                    element={
                      <Private>
                        <Printer />
                      </Private>
                    }
                  />
                  <Route
                    path="printer/edit/:id"
                    element={
                      <Private>
                        <PrinterFormEdit />
                      </Private>
                    }
                  />
                  <Route
                    path="printer/create"
                    element={
                      <Private>
                        <PrinterForm />
                      </Private>
                    }
                  />
                  <Route
                    path="counter"
                    element={
                      <Private>
                        <Counter />
                      </Private>
                    }
                  />
                  <Route
                    path="counter/create"
                    element={
                      <Private>
                        <CounterForm />
                      </Private>
                    }
                  />
                  <Route
                    path="user"
                    element={
                      <PrivateAdmin>
                        <UserProvider>
                          <User />
                        </UserProvider>
                      </PrivateAdmin>
                    }
                  />
                  <Route
                    path="user/register"
                    element={
                      <PrivateAdmin>
                        <Register />
                      </PrivateAdmin>
                    }
                  />
                </Route>
                <Route path="login" element={<Login />} />
              </Routes>
            </CounterProvider>
          </PrinterProvider>
        </ModelProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
