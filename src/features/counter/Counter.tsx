import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CounterContext from "@/contexts/counterContext";
import Button from "../../components/Button";

export default function Counter() {
  const navigate = useNavigate();
  const { countersPrinters } = useContext(CounterContext);

  return (
    <section className="bg-carbon-bg-modal">
      <div className="px-4 pt-6 pb-8">
        <h2>Contadores registrados</h2>
        <p>Lista de contadores registrados para as impressoras cadastradas</p>
      </div>
      <div className="gap-[1px] flex items-center">
        <div className="flex gap-[1px] items-center w-full">
          {/* <div className="w-full">
          <InputSearch
            onChange={handleSearchSerialChange}
            type="search"
            placeholder="Digite o número de série para buscar uma impressora"
          />
        </div> */}
          <div>
            <Button
              onClick={() => navigate("/counter/create")}
              text="Adicionar"
              aria-label="Cadastrar nova impressora"
            />
          </div>
        </div>
      </div>
      <table className="w-full bg-carbon-bg-modal">
        <thead>
          <tr className="text-left text-sm bg-carbon-table-head">
            <th className="pt-6 pb-8 px-4">Impressora</th>
            <th className="pt-6 pb-8 px-4">Impressões</th>
            <th className="pt-6 pb-8 px-4">Cópias</th>
            <th className="pt-6 pb-8 px-4">Contador anterior</th>
            <th className="pt-6 pb-8 px-4">Contador atual</th>
            <th className="pt-6 pb-8 px-4">Total</th>
            <th className="pt-6 pb-8 px-4">Criado em</th>
          </tr>
        </thead>
        <tbody>
          {countersPrinters.map((item) => (
            <tr key={item._id}>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {typeof item.printer === "object" &&
                  item.printer !== null &&
                  item.printer.serial}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.printed}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.copied}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.prevcounter}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.counter}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.counteramount}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.createdAt &&
                  new Date(item.createdAt).toLocaleDateString("pt-BR")}
              </td>
              {/* 
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
                </div>
              </td>
                /> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
      {actionNotification.status === true ? (
        <Notification theme="success" message={actionNotification.message} />
      ) : actionNotification.status === false ? (
        <Notification theme="error" message={actionNotification.message} />
      ) : (
        ""
      )}
    </div> */}
    </section>
  );
}
