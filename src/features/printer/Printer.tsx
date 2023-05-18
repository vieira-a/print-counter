import { ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import InputSearch from "@/components/InputSearch";
import Notification from "@/components/Notification";
import PrinterContext from "@/contexts/printerContext";

import { deletePrinter } from "@/services/servicePrinter";

export default function Printer() {
  const navigate = useNavigate();

  const {
    setSearchSerial,
    showActionNotification,
    actionNotification,
    setShouldUpdatePrinters,
    printersGrid,
  } = useContext(PrinterContext);

  const handleSearchSerialChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchSerial(value);
  };

  const handleDeletePrinter = (id: string) => {
    if (confirm("Deseja realmente excluir a impressora?")) {
      deletePrinter(id)
        .then(() => {
          showActionNotification({
            status: true,
            message: "Impressora excluída com sucesso",
          });
        })
        .catch((error) => {
          console.log(`Error: ${error.message}`);
          showActionNotification({
            status: false,
            message: "Erro ao excluir a impressora",
          });
        });
    }
    setShouldUpdatePrinters(true);
  };

  return (
    <section className="bg-carbon-bg-modal">
      <div className="px-4 pt-6 pb-8">
        <h2>Impressoras cadastradas</h2>
        <p>
          Clique nas ações selecionadas para editar ou excluir uma impressora
        </p>
      </div>
      <div className="gap-[1px] flex items-center">
        <div className="flex gap-[1px] items-center w-full">
          <div className="w-full">
            <InputSearch
              onChange={handleSearchSerialChange}
              type="search"
              placeholder="Digite o número de série para buscar uma impressora"
            />
          </div>
          <div>
            <Button
              onClick={() => navigate("/printer/create")}
              text="Adicionar"
              aria-label="Cadastrar nova impressora"
            />
          </div>
        </div>
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
          {printersGrid.map((item) => (
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
                    text="Alterar"
                  />
                  <Button
                    onClick={() => handleDeletePrinter(`${item._id}`)}
                    className="w-[25%]"
                    text="Excluir"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {actionNotification.status === true ? (
          <Notification theme="success" message={actionNotification.message} />
        ) : actionNotification.status === false ? (
          <Notification theme="error" message={actionNotification.message} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
