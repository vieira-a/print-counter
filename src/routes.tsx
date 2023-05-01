import DefaultPage from "./components/DefaultPage";
import App from "./App";
import Printer from "./features/printer/Printer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrinterProvider from "./features/printer/PrinterProvider";
import PrinterForm from "./features/printer/PrinterForm";

export default function AppRouter() {
  return (
    <main>
      <PrinterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultPage />}>
              <Route index element={<App />} />
              <Route path="printer" element={<Printer />} />
              <Route path="printer/create" element={<PrinterForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PrinterProvider>
    </main>
  );
}