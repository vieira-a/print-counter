import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { PrinterFormSchema } from "@/common/schemas/PrinterFormSchema";
import { Close } from "@carbon/icons-react";

import ButtonContent from "@/components/ButtonContent";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Notification from "@/components/Notification";

import { updatePrinter } from "@/services/servicePrinter";

import PrinterContext from "@/contexts/printerContext";
import { IPrinter } from "@/common/interfaces/IPrinter";
import useFilterPrinterById from "@/hooks/useFilterPrinterById";

export default function PrinterFormEdit() {
  const { id } = useParams();
  const goToPrinterPage = useNavigate();
  const {
    setShouldUpdatePrinters,
    showActionNotification,
    actionNotification,
  } = useContext(PrinterContext);

  const { printerById, showPrinterById } = useFilterPrinterById();
  const [selectPrinterToEdit, setSelectPrinterToEdit] = useState<IPrinter>();

  useEffect(() => {
    if (id) {
      showPrinterById(id);
      setSelectPrinterToEdit(printerById);
    }
  }, [id, showPrinterById, printerById]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPrinter>({
    resolver: zodResolver(PrinterFormSchema),
  });

  const handleEditPrinter: SubmitHandler<FieldValues> = async (data) => {
    const updatedPrinter: IPrinter = {
      model: data.model,
      brand: data.brand,
      serial: data.serial,
      local: data.local,
      printed: data.printed,
      copied: data.copied,
      counter: data.counter,
    };
    try {
      if (selectPrinterToEdit?._id) {
        await updatePrinter(selectPrinterToEdit._id, updatedPrinter);
        showActionNotification({
          status: true,
          message: "Impressora atualizada com sucesso.",
        });
        goToPrinterPage("/printer");
      }
    } catch (error) {
      showActionNotification({
        status: false,
        message: "Erro ao atualizar a impressora.",
      });
    }
    setShouldUpdatePrinters(true);
  };

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Alteração de impressora</h2>
          <Close
            onClick={() => goToPrinterPage("/printer")}
            size={24}
            className="cursor-pointer"
            aria-label="Fechar formulário"
          />
        </div>
        <div>
          <p className="w-[85%]">
            Altere os campos com as informações necessárias para editar uma
            impressora cadastrada
          </p>
        </div>
      </div>
      <div>
        {selectPrinterToEdit && (
          <form onSubmit={handleSubmit(handleEditPrinter)}>
            <div className="px-4 pt-8">
              <label className="text-xs text-carbon-label">
                Número de série
                <Input
                  type="text"
                  placeholder="Informe o número de série"
                  {...register("serial")}
                  defaultValue={selectPrinterToEdit.serial}
                />
                {errors.serial && (
                  <ErrorMessage
                    data-testid="error-serial"
                    message={`${errors.serial.message}`}
                  />
                )}
              </label>
            </div>
            <div className="grid grid-cols-2 gap-8 px-4 my-8">
              <label className="text-xs text-carbon-label">
                Fabricante
                <Input
                  type="text"
                  placeholder="Informe o fabricante"
                  {...register("brand")}
                  defaultValue={selectPrinterToEdit?.brand}
                />
                {errors.brand && (
                  <ErrorMessage
                    data-testid="error-brand"
                    message={`${errors.brand.message}`}
                  />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Modelo
                <Input
                  type="text"
                  placeholder="Informe o modelo"
                  {...register("model")}
                  defaultValue={selectPrinterToEdit?.model}
                />
                {errors.model && (
                  <ErrorMessage
                    data-testid="error-model"
                    message={`${errors.model.message}`}
                  />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Localização
                <Input
                  type="text"
                  placeholder="Informe o local de instalação"
                  {...register("local")}
                  defaultValue={selectPrinterToEdit?.local}
                />
                {errors.local && (
                  <ErrorMessage
                    data-testid="error-local"
                    message={`${errors.local.message}`}
                  />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Páginas impressas
                <Input
                  type="number"
                  placeholder="Informe número de páginas impressas"
                  {...register("printed")}
                  defaultValue={selectPrinterToEdit?.printed}
                />
                {errors.printed && (
                  <ErrorMessage
                    data-testid="error-printed"
                    message={`${errors.printed.message}`}
                  />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Número de cópias
                <Input
                  type="number"
                  placeholder="Informe o numero de cópias"
                  {...register("copied")}
                  defaultValue={selectPrinterToEdit?.copied}
                />
                {errors.copied && (
                  <ErrorMessage
                    data-testid="error-copied"
                    message={`${errors.copied.message}`}
                  />
                )}
              </label>
              <label className="text-xs text-carbon-label">
                Contador atual
                <Input
                  type="number"
                  placeholder="Informe o contador atual"
                  {...register("counter")}
                  defaultValue={selectPrinterToEdit?.counter}
                />
                {errors.counter && (
                  <ErrorMessage
                    data-testid="error-counter"
                    message={`${errors.counter.message}`}
                  />
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
                onClick={() => goToPrinterPage("/printer")}
                aria-label="Fechar formulário"
                type="reset"
                text="Cancelar"
                theme="secondary"
              />
              <ButtonContent type="submit" text="Salvar" theme="primary" />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
