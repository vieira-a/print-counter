import { Close } from "@carbon/icons-react";
import Input from "../../components/Input";
import ButtonContent from "../../components/ButtonContent";
import Notification from "../../components/Notification";
import { FormEvent, useContext, useEffect, useState } from "react";
import PrinterContext from "../../contexts/printerContext";
import { IPrinter } from "../../common/interfaces/IPrinter";
import { useNavigate } from "react-router-dom";

export default function PrinterForm() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const { printer, setPrinter, printerMessage, setPrinterMessage } =
    useContext(PrinterContext);

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

  function showFormNotification() {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  }

  function createPrinter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Object.values(newPrinterObject).every((value) => !!value)) {
      setPrinter(newPrinterObject);
      showFormNotification();
      clearInputForm();
    } else {
      showFormNotification();
      setPrinterMessage("error");
    }
  }

  function goToPrinterPage() {
    navigate("/printer");
  }

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Cadastro de impressoras</h2>
          <Close
            onClick={goToPrinterPage}
            size={24}
            className="cursor-pointer"
            aria-label="Fechar formulário"
          />
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
              {showNotification && (
                <Notification
                  setShowNotification={setShowNotification}
                  theme={`${printerMessage}`}
                  message={
                    printerMessage === "success"
                      ? "Impressora cadastrada com sucesso"
                      : printerMessage === "error"
                      ? "Erro ao cadastrar a impressora"
                      : ""
                  }
                />
              )}
            </div>
          </div>
          <div className="flex gap-[1px]">
            <ButtonContent
              aria-label="Fechar formulário"
              onClick={goToPrinterPage}
              type="reset"
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
