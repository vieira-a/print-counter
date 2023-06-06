import { useContext, useEffect, useState } from "react";
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
import ModelContext from "@/contexts/modelContext";
import { createPrinter } from "@/services/servicePrinter";
import Select from "@/components/Select";
import { IModel } from "@/common/interfaces/IModel";

import useFilterModelByName from "@/hooks/useFilterModelByName";

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

  const { modelByModelName, showModelByName } = useFilterModelByName();

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

  const { model } = useContext(ModelContext);
  const [modelId, setModelId] = useState("");

  useEffect(() => {
    const handleModelId = () => {
      if (modelByModelName[0]?._id) {
        setModelId(modelByModelName[0]._id);
      }
    };
    handleModelId();
  }, [modelByModelName]);

  const handleCreatePrinter: SubmitHandler<FieldValues> = (data) => {
    const counter = Number(data.printed) + Number(data.copied);

    const newPrinterObject: IPrinter = {
      model: (data.model = modelId),
      brand: data.brand,
      serial: data.serial,
      local: data.local,
      ipv4: data.ipv4,
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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    showModelByName(selectedOption);
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
        <form onSubmit={handleSubmit(handleCreatePrinter)}>
          <div className="grid grid-cols-2 gap-8 px-4 my-8">
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
            <label className="text-xs text-carbon-label">
              Endereço IP
              <Input
                type="text"
                placeholder="Informe o endereço IP"
                {...register("ipv4")}
              />
              {errors.ipv4 && (
                <ErrorMessage
                  data-testid="error-ipv4"
                  message={`${errors.ipv4.message}`}
                />
              )}
            </label>
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
              <Select onChange={handleSelectChange}>
                <option>Selecione um modelo</option>
                {model?.map((item: IModel) => (
                  <option key={item._id} {...register("model")}>
                    {item.model_name}
                  </option>
                ))}
              </Select>
              {errors.model && (
                <ErrorMessage message={`${errors.model.message}`} />
              )}
              {/* <Input
                type="text"
                placeholder="Informe o modelo"
                {...register("model")}
              />
              {errors.model && (
                <ErrorMessage message={`${errors.model.message}`} />
              )} */}
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
