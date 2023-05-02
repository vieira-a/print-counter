import { useContext } from "react";
import ButtonContent from "../../components/ButtonContent";
import PrinterContext from "../../contexts/printerContext";

export default function Printer() {
  const { printers } = useContext(PrinterContext);

  return (
    <section>
      <table className="w-full bg-carbon-bg-modal">
        <div className="px-4 pt-6 pb-8">
          <h2>Impressoras cadastradas</h2>
          <p>
            Clique nas ações selecionadas para editar ou excluir uma impressora
          </p>
        </div>
        <tr className="text-left text-sm bg-carbon-table-head">
          <th className="pt-6 pb-8 px-4">N. Série</th>
          <th className="pt-6 pb-8 px-4">Marca</th>
          <th className="pt-6 pb-8 px-4">Contador</th>
          <th className="pt-6 pb-8 px-4">Local</th>
          <th className="pt-6 pb-8 px-4">Ações</th>
        </tr>
        {printers?.map((item) => (
          <tr>
            <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
              {item.serial}
            </td>
            <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
              {item.brand}
            </td>
            <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
              {item.counter}
            </td>
            <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
              {item.local}
            </td>
            <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
              <div className="flex gap-3">
                <ButtonContent theme="primary" text="Alterar" />
                <ButtonContent theme="danger" text="Excluir" />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
}
