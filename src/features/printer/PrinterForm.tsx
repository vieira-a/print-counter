import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PrinterFormSchema } from "../../common/schemas/PrinterFormSchema";
import { Close } from "@carbon/icons-react";
import Input from "../../components/Input";
import ButtonContent from "../../components/ButtonContent";
import { IPrinter } from "../../common/interfaces/IPrinter";
import ErrorMessage from "../../components/ErrorMessage";
import { useContext, useState } from "react";
import PrinterContext from "../../contexts/printerContext";
import Notification from "../../components/Notification";
import { useNavigate } from "react-router-dom";

export default function PrinterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPrinter>({
    resolver: zodResolver(PrinterFormSchema),
  });

  const { setPrinter } = useContext(PrinterContext);
  const [createdSuccess, setCreatedSuccess] = useState<boolean | null>(null);

  const createPrinter: SubmitHandler<FieldValues> = (data) => {
    try {
      const newPrinter: IPrinter = {
        model: data.model,
        brand: data.brand,
        serial: data.serial,
        local: data.local,
        counter: data.counter,
      };
      console.log(newPrinter);
      setPrinter(newPrinter);
      setCreatedSuccess(true);
      setTimeout(() => {
        setCreatedSuccess(null);
      }, 2000);
      navigate("/printer");
      console.log("Objeto printer:", newPrinter);
    } catch (error) {
      setPrinter({
        model: "",
        brand: "",
        serial: "",
        local: "",
        counter: "",
      });
      setCreatedSuccess(false);
      console.log("Erro ao cadastrar:", error);
    }
  };

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Cadastro de impressoras</h2>
          <Close
            onClick={() => navigate("/printer")}
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
        <form
          onSubmit={handleSubmit(createPrinter)}
          className="flex flex-col gap-8"
        >
          <div className="px-4 pt-8">
            <label className="text-xs text-carbon-label">
              Número de série
              <Input
                type="text"
                placeholder="Informe o número de série"
                {...register("serial")}
              />
              {errors.serial && (
                <ErrorMessage
                  data-testid="error-serial"
                  message={`${errors.serial.message}`}
                />
              )}
            </label>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-8 px-4 mb-8">
              <label className="text-xs text-carbon-label">
                Fabricante
                <Input
                  type="text"
                  placeholder="Informe o fabricante"
                  {...register("brand")}
                />
                {errors.brand && (
                  <ErrorMessage message={`${errors.brand.message}`} />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Modelo
                <Input
                  type="text"
                  placeholder="Informe o modelo"
                  {...register("model")}
                />
                {errors.model && (
                  <ErrorMessage message={`${errors.model.message}`} />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Localização
                <Input
                  type="text"
                  placeholder="Informe o local de instalação"
                  {...register("local")}
                />
                {errors.local && (
                  <ErrorMessage message={`${errors.local.message}`} />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Contador atual
                <Input
                  type="number"
                  placeholder="Informe o contador atual"
                  {...register("counter", { valueAsNumber: true })}
                />
                {errors.counter && (
                  <ErrorMessage message={`${errors.counter.message}`} />
                )}
              </label>
            </div>
            <div className="px-4">
              {createdSuccess === true ? (
                <Notification
                  theme="success"
                  message="Impressora cadastrada com sucesso"
                />
              ) : createdSuccess === false ? (
                <Notification
                  theme="error"
                  message="Erro ao cadastrar a impressora"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex gap-[1px]">
            <ButtonContent
              onClick={() => navigate("/printer")}
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
