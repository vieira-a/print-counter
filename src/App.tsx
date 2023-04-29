import Header from "./components/Header";
import Printer from "./features/printer/Printer";
import PrinterProvider from "./features/printer/PrinterProvider";

function App() {
  return (
    <section>
      <Header />
      <div className="relative">
        <PrinterProvider>
          <Printer />
        </PrinterProvider>
      </div>
    </section>
  );
}

export default App;
