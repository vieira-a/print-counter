import { useContext } from "react";
import PrinterContext from "../../contexts/printerContext";

export default function Printer() {
  const { printers } = useContext(PrinterContext);

  return (
    <main>
      <section>
        {printers?.map((item) => (
          <div key={item._id}>
            <p>{item._id}</p>
            <p>{item.serial}</p>
            <p>{item.brand}</p>
            <p>{item.model}</p>
            <p>{item.local}</p>
            <p>{item.counter}</p>
            <p>{new Date(`${item.createdAt}`).toLocaleDateString("pt-BR")}</p>
            <p>{new Date(`${item.updatedAt}`).toLocaleDateString("pt-BR")}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
