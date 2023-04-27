import { Close } from "@carbon/icons-react";
import Input from "../../components/Input";
import ButtonContent from "../../components/ButtonContent";

interface PrinterFormProps {
  setShowForm: (state: boolean) => void;
}

export default function PrinterForm({ setShowForm }: PrinterFormProps) {
  function closeForm() {
    setShowForm(false);
  }

  return (
    <section className="w-[50%] px-4 mx-auto bg-carbon-bg-modal absolute top-[192px] left-[50%] translate-x-[-50%] ">
      <div className="flex justify-between py-4">
        <h2>Cadastro de impressoras</h2>
        <Close size={24} onClick={closeForm} className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-6">
        <p className="w-[70%]">
          Preencha os campos com as informações necessárias para cadastrar uma
          nova impressora
        </p>
        <form className="flex flex-col gap-8">
          <div>
            <Input
              type="text"
              label="Número de série"
              name="serialNumber"
              placeholder="Informe o número de série"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 mb-4">
            <Input
              type="text"
              label="Fabricante"
              name="brand"
              placeholder="Informe o fabricante"
            />
            <Input
              type="text"
              label="Modelo"
              name="model"
              placeholder="Informe o modelo"
            />
            <Input
              type="text"
              label="Localicação"
              name="location"
              placeholder="Informe o local de instalação"
            />
            <Input
              type="number"
              label="Contador atual"
              name="counter"
              placeholder="Informe o contador atual"
            />
          </div>
          <div className="grid-flow-row text-right">
            <ButtonContent
              onClick={() => setShowForm(false)}
              text="Cancelar"
              theme="secondary"
              className="w-[33%]"
            />
            <ButtonContent text="Salvar" theme="primary" className="w-[33%]" />
          </div>
        </form>
      </div>
    </section>
  );
}
