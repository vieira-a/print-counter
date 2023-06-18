import Button from "./components/Button";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <section className="flex justify-between items-center bg-bg-main-01 text-text-01 py-4 px-16 font-thin border-b border-b-border-01">
        <h1 className="text-2xl">Dashboard</h1>
        <Button text="Criar contador" />
      </section>
      <section>
        <Dashboard />
      </section>
    </>
  );
}

export default App;
