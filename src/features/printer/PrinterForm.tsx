import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Close } from "@carbon/icons-react";
import { PrinterFormSchema } from "@/common/schemas/PrinterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import ButtonContent from "@/components/ButtonContent";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Notification from "@/components/Notification";

import { IPrinter } from "@/common/interfaces/IPrinter";
import PrinterContext from "@/contexts/printerContext";
import { createPrinter } from "@/services/servicePrinter";

export default function PrinterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IPrinter>({
    resolver: zodResolver(PrinterFormSchema),
  });

  const printedValue = watch("printed");
  const copiedValue = watch("copied");

  useEffect(() => {
    if (printedValue !== undefined && copiedValue !== undefined) {
      const counterValue = Number(printedValue) + Number(copiedValue);
      setValue("counter", counterValue);
    }
  }, [printedValue, copiedValue, setValue]);

  const {
    printers,
    showActionNotification,
    actionNotification,
    setShouldUpdatePrinters,
  } = useContext(PrinterContext);

  const handleCreatePrinter: SubmitHandler<FieldValues> = (data) => {
    const counter = Number(data.printed) + Number(data.copied);

    const newPrinterObject: IPrinter = {
      model: data.model,
      brand: data.brand,
      serial: data.serial,
      local: data.local,
      printed: data.printed,
      copied: data.copied,
      counter,
    };
    try {
      if (printers?.some((item) => item.serial === newPrinterObject.serial)) {
        alert(
          `Já existe uma impressora cadastrada com o número de série ${newPrinterObject.serial}`
        );
        return;
      }
      createPrinter(newPrinterObject);
      showActionNotification({
        status: true,
        message: "Impressora cadastrada com sucesso",
      });
    } catch (error) {
      showActionNotification({
        status: false,
        message: "Erro ao cadastrar a impressora",
      });
      console.log(error);
    }
    setShouldUpdatePrinters(true);
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
          onSubmit={handleSubmit(handleCreatePrinter)}
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
                Páginas impressas
                <Input
                  type="number"
                  placeholder="Informe número de páginas impressas"
                  {...register("printed", { valueAsNumber: true })}
                />
                {errors.printed && (
                  <ErrorMessage message={`${errors.printed.message}`} />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Número de cópias
                <Input
                  type="number"
                  placeholder="Informe o numero de cópias"
                  {...register("copied", { valueAsNumber: true })}
                />
                {errors.copied && (
                  <ErrorMessage message={`${errors.copied.message}`} />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Contador atual
                <Input
                  type="number"
                  disabled
                  placeholder="Informe o contador atual"
                  {...register("counter", { valueAsNumber: true })}
                />
                {errors.counter && (
                  <ErrorMessage message={`${errors.counter.message}`} />
                )}
              </label>
            </div>
            <div className="px-4">
              {actionNotification.status === true ? (
                <Notification
                  theme="success"
                  message={actionNotification.message}
                />
              ) : actionNotification.status === false ? (
                <Notification
                  theme="error"
                  message={actionNotification.message}
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
