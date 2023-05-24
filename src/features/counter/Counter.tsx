import { useContext, useEffect, useState } from "react";
import CounterContext from "@/contexts/counterContext";
import Input from "../../components/Input";
import useFilterCounterByDate from "../../hooks/useFilterCounterByDate";
import { ICounter } from "@/common/interfaces/ICounter";

export default function Counter() {
  const { countersPrinters } = useContext(CounterContext);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [counterGrid, setCounterGrid] = useState<ICounter[]>([]);
  const { counterByDate, showCounterByDate } = useFilterCounterByDate();

  useEffect(() => {
    if (!startDate && endDate) {
      setCounterGrid(countersPrinters);
    } else {
      showCounterByDate(startDate, endDate);
    }
  }, [countersPrinters, endDate, showCounterByDate, startDate]);

  useEffect(() => {
    setCounterGrid(counterByDate);
  }, [counterByDate]);

  return (
    <section className="bg-carbon-bg-modal">
      <div className="px-4 pt-6 pb-8">
        <h2>Contadores registrados</h2>
        <p>Lista de contadores registrados para as impressoras cadastradas</p>
      </div>
      <div className="flex justify-end ">
        <div className="flex gap-1">
          <label className="text-xs text-carbon-label">
            Data inicial
            <Input
              onChange={(event) => setStartDate(event.target.value)}
              type="date"
              placeholder="Data inicial"
            />
          </label>
          <label className="text-xs text-carbon-label">
            Data final
            <Input
              onChange={(event) => setEndDate(event.target.value)}
              type="date"
              placeholder="Data final"
            />
          </label>
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
          {counterGrid.map((item) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
