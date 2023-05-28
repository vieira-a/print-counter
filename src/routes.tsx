import DefaultPage from "./components/DefaultPage";
import App from "./App";
import Printer from "./features/printer/Printer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrinterProvider from "./features/printer/PrinterProvider";
import { CounterProvider } from "./features/counter/CounterProvider";
import AuthProvider from "./features/auth/AuthProvider";
import PrinterForm from "./features/printer/PrinterForm";
import PrinterFormEdit from "./features/printer/PrinterFormEdit";
import Counter from "./features/counter/Counter";
import CounterForm from "./features/counter/CounterForm";
import Login from "./features/auth/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PrinterProvider>
          <CounterProvider>
            <Routes>
              <Route path="/" element={<DefaultPage />}>
                <Route index element={<App />} />
                <Route path="printer" element={<Printer />} />
                <Route path="printer/edit/:id" element={<PrinterFormEdit />} />
                <Route path="printer/create" element={<PrinterForm />} />
                <Route path="counter" element={<Counter />} />
                <Route path="counter/create" element={<CounterForm />} />
              </Route>
              <Route path="login" element={<Login />} />
            </Routes>
          </CounterProvider>
        </PrinterProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
