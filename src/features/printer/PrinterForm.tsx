import { Close } from "@carbon/icons-react";
import InputText from "../../components/InputText";
import ButtonContent from "../../components/ButtonContent";

export default function PrinterForm() {
  return (
    <section className="w-[50%] px-4 mx-auto bg-carbon-bg-modal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex justify-between py-4">
        <h2>Cadastro de impressoras</h2>
        <Close size={24} />
      </div>
      <div className="flex flex-col gap-6">
        <p className="w-[70%]">
          Preencha os campos com as informações necessárias para cadastrar uma
          nova impressora
        </p>
        <form className="flex flex-col gap-8">
          <div>
            <InputText
              label="Número de série"
              name="serialNumber"
              placeholder="Informe o número de série"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 mb-4">
            <InputText
              label="Fabricante"
              name="brand"
              placeholder="Informe o fabricante"
            />
            <InputText
              label="Modelo"
              name="model"
              placeholder="Informe o modelo"
            />
            <InputText
              label="Localicação"
              name="location"
              placeholder="Informe o local de instalação"
            />
            <InputText
              label="Contador atual"
              name="counter"
              placeholder="Informe o contador atual"
            />
          </div>
          <div className="grid-flow-row text-right">
            <ButtonContent
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