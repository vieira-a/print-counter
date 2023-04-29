import { useState, useContext } from "react";
import PrinterContext from "../../contexts/printerContext";
import ModalCard from "../../components/ModalCard";
import PrinterForm from "./PrinterForm";
import Button from "../../components/Button";

export default function Printer() {
  const [showForm, setShowForm] = useState(false);

  const { printer } = useContext(PrinterContext);

  console.log(printer);

  return (
    <main className="h-screen bg-carbon-white p-4">
      <section className="flex gap-4 justify-end ">
        <ModalCard
          title="Adicionar impressora"
          description="Cadastre uma nova impressora para iniciar o controle do seu contador"
        >
          <Button onClick={() => setShowForm(true)} text="Adicionar" />
        </ModalCard>

        <ModalCard
          title="Adicionar contador"
          description="Registre o contador atual para uma impressora cadastrada"
        >
          <Button text="Adicionar" />
        </ModalCard>
        <ModalCard
          title="Imprimir relatórios"
          description="Monte relatórios personalizados,  imprima ou exporte para um arquivo"
        >
          <Button text="Acessar" />
        </ModalCard>
      </section>
      {showForm && <PrinterForm setShowForm={setShowForm} />}
    </main>
  );
}
