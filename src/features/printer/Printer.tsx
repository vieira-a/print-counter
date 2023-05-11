import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputSearch from "../../components/InputSearch";
import PrinterContext from "../../contexts/printerContext";

export default function Printer() {
  const navigate = useNavigate();
  const { printers, deleteSelectedPrinter } = useContext(PrinterContext);
  const handleDeletePrinter = (id: string) => {
    deleteSelectedPrinter(id);
  };

  return (
    <section className="bg-carbon-bg-modal">
      <div className="px-4 pt-6 pb-8">
        <h2>Impressoras cadastradas</h2>
        <p>
          Clique nas ações selecionadas para editar ou excluir uma impressora
        </p>
      </div>
      <div className="flex gap-[1px] w-full items-center">
        <InputSearch type="search" placeholder="Buscar uma impressora" />
        <Button text="Procurar" aria-label="Procurar impressora" />
      </div>
      <table className="w-full bg-carbon-bg-modal">
        <thead>
          <tr className="text-left text-sm bg-carbon-table-head">
            <th className="pt-6 pb-8 px-4">N. Série</th>
            <th className="pt-6 pb-8 px-4">Marca</th>
            <th className="pt-6 pb-8 px-4">Modelo</th>
            <th className="pt-6 pb-8 px-4">Contador</th>
            <th className="pt-6 pb-8 px-4">Local</th>
            <th className="pt-6 pb-8 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {printers?.map((item) => (
            <tr key={item._id}>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.serial}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.brand}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.model}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.counter}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.local}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                <div className="flex gap-1">
                  <Button
                    onClick={() => navigate(`/printer/edit/${item._id}`)}
                    className="w-[25%]"
                    // theme="primary"
                    text="Alterar"
                  />
                  <Button
                    onClick={() => handleDeletePrinter(`${item._id}`)}
                    className="w-[25%]"
                    // theme="danger"
                    text="Excluir"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
