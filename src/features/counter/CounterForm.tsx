import Select from "../../components/Select";
import Input from "../../components/Input";
import ButtonContent from "../../components/ButtonContent";
import { useContext } from "react";
import CounterContext from "../../contexts/counterContext";
import { IPrinter } from "../../common/interfaces/IPrinter";
import useFilterPrinterBySerial from "@/hooks/useFilterPrinterBySerial";

export default function CounterForm() {
  const { counterPrinters } = useContext(CounterContext);
  const { printerBySerial, showPrinterBySerial } = useFilterPrinterBySerial();

  const handleSelectedPrinter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectOption = event.target.value;
    showPrinterBySerial(selectOption);
  };

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Cadastro de contador</h2>
        </div>
        <div>
          <p className="w-[85%]">
            Preencha os campos com as informações necessárias para cadastrar um
            novo contador
          </p>
        </div>
      </div>
      <form data-testid="form-counter">
        <div className="grid grid-cols-2 gap-8 px-4 my-8">
          <label className="text-xs text-carbon-label">
            Selecione uma impressora
            <Select onChange={handleSelectedPrinter}>
              <option>Selecione uma impressora</option>
              {counterPrinters.map((printer: IPrinter) => (
                <option key={printer.serial}>{printer.serial}</option>
              ))}
            </Select>
          </label>
          <label className="text-xs text-carbon-label">
            Último contador
            {printerBySerial.length > 0 ? (
              <Input
                defaultValue={printerBySerial[0].counter}
                data-testid="printer-counter"
                type="number"
                disabled
              />
            ) : (
              <Input data-testid="printer-counter" type="number" disabled />
            )}
          </label>
          <label className="text-xs text-carbon-label">
            Cópias
            <Input data-testid="counter-copied" type="number" />
          </label>
          <label className="text-xs text-carbon-label">
            Impressões
            <Input data-testid="counter-printed" type="number" />
          </label>
        </div>
        <div className="flex gap-[1px]">
          <ButtonContent type="reset" text="Cancelar" theme="secondary" />
          <ButtonContent type="submit" text="Salvar" theme="primary" />
        </div>
      </form>
    </section>
  );
}
