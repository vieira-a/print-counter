import { Close } from "@carbon/icons-react";
import Input from "../../components/Input";
import ButtonContent from "../../components/ButtonContent";
import Notification from "../../components/Notification";
import { FormEvent, useContext, useEffect, useState } from "react";
import PrinterContext from "../../contexts/printerContext";
import { IPrinter } from "../../common/interfaces/IPrinter";

interface PrinterFormProps {
  setShowForm: (state: boolean) => void;
}

export default function PrinterForm({ setShowForm }: PrinterFormProps) {
  function closeForm() {
    setShowForm(false);
    setShowNotification(false);
  }

  const [showNotification, setShowNotification] = useState(false);

  const { printer, setPrinter, printerCreated } = useContext(PrinterContext);

  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [serial, setSerial] = useState("");
  const [local, setLocal] = useState("");
  const [counter, setCounter] = useState("");
  const [newPrinterObject, setNewPrinterObject] = useState<IPrinter>(printer);

  useEffect(() => {
    function updateNewPrinterObject() {
      setNewPrinterObject({
        model,
        brand,
        serial,
        local,
        counter,
      });
    }
    updateNewPrinterObject();
  }, [model, brand, serial, local, counter]);

  function clearInputForm() {
    setModel("");
    setBrand("");
    setSerial("");
    setLocal("");
    setCounter("");
  }

  function createPrinter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrinter(newPrinterObject);
    clearInputForm();
  }

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal absolute top-[74px] left-[50%] translate-x-[-50%] translate-y-[-58px]">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Cadastro de impressoras</h2>
          <Close size={24} onClick={closeForm} className="cursor-pointer" />
        </div>
        <div>
          <p className="w-[85%]">
            Preencha os campos com as informações necessárias para cadastrar uma
            nova impressora
          </p>
        </div>
      </div>
      <div>
        <form onSubmit={createPrinter} className="flex flex-col gap-8">
          <div className="px-4 pt-8">
            <label className="text-xs text-carbon-label">
              Número de série
              <Input
                required
                type="text"
                name="serialNumber"
                placeholder="Informe o número de série"
                value={serial}
                onChange={(event) => setSerial(event.target.value)}
              />
            </label>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-8 px-4 mb-8">
              <label className="text-xs text-carbon-label">
                Fabricante
                <Input
                  required
                  type="text"
                  name="brand"
                  placeholder="Informe o fabricante"
                  value={brand}
                  onChange={(event) => setBrand(event.target.value)}
                />
              </label>
              <label className="text-xs text-carbon-label">
                Modelo
                <Input
                  required
                  type="text"
                  name="model"
                  placeholder="Informe o modelo"
                  value={model}
                  onChange={(event) => setModel(event.target.value)}
                />
              </label>
              <label className="text-xs text-carbon-label">
                Localização
                <Input
                  required
                  type="text"
                  name="location"
                  placeholder="Informe o local de instalação"
                  value={local}
                  onChange={(event) => setLocal(event.target.value)}
                />
              </label>
              <label className="text-xs text-carbon-label">
                Contador atual
                <Input
                  required
                  type="number"
                  name="counter"
                  placeholder="Informe o contador atual"
                  value={counter}
                  onChange={(event) => setCounter(event.target.value)}
                />
              </label>
            </div>
            <div className="px-4">
              {printerCreated && showNotification && (
                <Notification
                  setShowNotification={setShowNotification}
                  theme="success"
                  message={"Impressora cadastrada com sucesso"}
                />
              )}
              {!printerCreated && showNotification && (
                <Notification
                  setShowNotification={setShowNotification}
                  theme="error"
                  message={"Impressora não cadastrada"}
                />
              )}
            </div>
          </div>
          <div className="flex gap-[1px]">
            <ButtonContent
              type="reset"
              onClick={() => setShowForm(false)}
              text="Cancelar"
              theme="secondary"
            />
            <ButtonContent type="submit" text="Salvar" theme="primary" />
          </div>
        </form>
      </div>
    </section>
  );
}
