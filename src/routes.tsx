import DefaultPage from "./components/DefaultPage";
import App from "./App";
import Printer from "./features/printer/Printer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrinterProvider from "./features/printer/PrinterProvider";
import PrinterForm from "./features/printer/PrinterForm";
import PrinterFormEdit from "./features/printer/PrinterFormEdit";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <PrinterProvider>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<App />} />
            <Route path="printer" element={<Printer />} />
            <Route path="printer/:id" element={<PrinterFormEdit />} />
            <Route path="printer/create" element={<PrinterForm />} />
          </Route>
        </Routes>
      </PrinterProvider>
    </BrowserRouter>
  );
}
