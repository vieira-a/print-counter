import ButtonContent from "../../components/ButtonContent";
import Input from "../../components/Input";

export default function PrinterFormEdit() {
  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Alteração de impressora</h2>
        </div>
        <div>
          <p className="w-[85%]">
            Altere os campos com as informações necessárias para editar uma
            impressora cadastrada
          </p>
        </div>
      </div>
      <div>
        <form>
          <div className="px-4 pt-8">
            <label className="text-xs text-carbon-label">
              Número de série
              <Input type="text" placeholder="Informe o número de série" />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-8 px-4 my-8">
            <label className="text-xs text-carbon-label">
              Fabricante
              <Input type="text" placeholder="Informe o fabricante" />
            </label>
            <label className="text-xs text-carbon-label">
              Modelo
              <Input type="text" placeholder="Informe o modelo" />
            </label>
            <label className="text-xs text-carbon-label">
              Localização
              <Input type="text" placeholder="Informe o local de instalação" />
            </label>
            <label className="text-xs text-carbon-label">
              Contador atual
              <Input type="number" placeholder="Informe o contador atual" />
            </label>
          </div>
          <div className="px-4"></div>
          <div className="flex gap-[1px]">
            <ButtonContent
              aria-label="Fechar formulário"
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
