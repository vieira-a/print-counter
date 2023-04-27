import { Close } from "@carbon/icons-react";
import Input from "../../components/Input";
import ButtonContent from "../../components/ButtonContent";
import Notification from "../../components/Notification";
import { useState } from "react";

interface PrinterFormProps {
  setShowForm: (state: boolean) => void;
}

export default function PrinterForm({ setShowForm }: PrinterFormProps) {
  function closeForm() {
    setShowForm(false);
    setShowNotification(false);
  }

  const [showNotification, setShowNotification] = useState(false);

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
        <form className="flex flex-col gap-8">
          <div className="px-4 pt-8">
            <Input
              required={true}
              type="text"
              label="Número de série"
              name="serialNumber"
              placeholder="Informe o número de série"
            />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-8 px-4 mb-8">
              <Input
                required={true}
                type="text"
                label="Fabricante"
                name="brand"
                placeholder="Informe o fabricante"
              />
              <Input
                required={true}
                type="text"
                label="Modelo"
                name="model"
                placeholder="Informe o modelo"
              />
              <Input
                required={true}
                type="text"
                label="Localicação"
                name="location"
                placeholder="Informe o local de instalação"
              />
              <Input
                required={true}
                type="number"
                label="Contador atual"
                name="counter"
                placeholder="Informe o contador atual"
              />
            </div>
            <div className="px-4">
              {showNotification && (
                <Notification
                  setShowNotification={setShowNotification}
                  onClick={() => setShowNotification(false)}
                  theme="success"
                  message="Sucesso"
                />
              )}
            </div>
          </div>
          <div className="flex gap-[1px]">
            <ButtonContent
              onClick={() => setShowForm(false)}
              text="Cancelar"
              theme="secondary"
            />
            <ButtonContent
              onClick={() => setShowNotification(true)}
              text="Salvar"
              theme="primary"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
