import Header from "./components/Header";
import Printer from "./features/printer/Printer";

function App() {
  return (
    <section>
      <Header />
      <div className="relative">
        <Printer />
      </div>
    </section>
  );
}

export default App;
