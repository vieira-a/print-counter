import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CounterFormSchema } from "../../common/schemas/CounterFormSchema";
import { Close } from "@carbon/icons-react";

import { ICounter } from "../../common/interfaces/ICounter";
import { IPrinter } from "../../common/interfaces/IPrinter";

import Select from "../../components/Select";
import Input from "../../components/Input";
import ButtonContent from "../../components/ButtonContent";

import CounterContext from "../../contexts/counterContext";

import { createCounter } from "../../services/servicesCounter";

import useActionNotification from "../../hooks/useActionNotification";
import useFilterPrinterBySerial from "../../hooks/useFilterPrinterBySerial";
import ErrorMessage from "../../components/ErrorMessage";
import Notification from "../../components/Notification";

export default function CounterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICounter>({
    resolver: zodResolver(CounterFormSchema),
  });

  const { printers } = useContext(CounterContext);
  const { actionNotification, showActionNotification } =
    useActionNotification();
  const { printerBySerial, showPrinterBySerial } = useFilterPrinterBySerial();

  const onSubmit = (data: ICounter) => {
    const newCounter = {
      printer: (data.printer = printerBySerial[0]?._id),
      copied: data.copied,
      printed: data.printed,
      note: data.note,
    };
    try {
      createCounter(newCounter);
      showActionNotification({
        status: true,
        message: "Contador atualizado com sucesso",
      });
    } catch (error) {
      showActionNotification({
        status: true,
        message: "Erro ao atualizar contador",
      });
      console.log(error);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    showPrinterBySerial(selectedOption);
  };

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Cadastro de contador</h2>
          <Close
            onClick={() => navigate("/counter")}
            size={24}
            className="cursor-pointer"
            aria-label="Fechar formulário"
          />
        </div>
        <div>
          <p className="w-[85%]">
            Preencha os campos com as informações necessárias para cadastrar um
            novo contador
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="form-counter">
        <div className="px-4 my-8">
          <label className="text-xs text-carbon-label">
            ID da impressora
            <Input
              defaultValue={printerBySerial[0]?._id}
              data-testid="printer-id"
              type="string"
              {...register("printer")}
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-8 px-4 my-8">
          <label className="text-xs text-carbon-label">
            Selecione uma impressora
            <Select onChange={handleSelectChange}>
              <option>Selecione uma impressora</option>
              {printers.map((printer: IPrinter) => (
                <option key={printer.serial}>{printer.serial}</option>
              ))}
            </Select>
          </label>
          <label className="text-xs text-carbon-label">
            Último contador
            <Input
              data-testid="printer-counter"
              type="number"
              disabled
              defaultValue={printerBySerial[0]?.counter}
            />
          </label>
          <label className="text-xs text-carbon-label">
            Cópias
            <Input
              data-testid="counter-copied"
              type="number"
              {...register("copied")}
            />
            {errors.copied && (
              <ErrorMessage message={`${errors.copied.message}`} />
            )}
          </label>
          <label className="text-xs text-carbon-label">
            Impressões
            <Input
              data-testid="counter-printed"
              type="number"
              {...register("printed")}
            />
            {errors.printed && (
              <ErrorMessage message={`${errors.printed.message}`} />
            )}
          </label>
        </div>
        <div className="px-4 my-8">
          <label className="text-xs text-carbon-label">
            Observações
            <Input
              data-testid="counter-note"
              type="text"
              {...register("note")}
            />
            {errors.note && <ErrorMessage message={`${errors.note.message}`} />}
          </label>
        </div>
        <div className="px-4">
          {actionNotification.status === true ? (
            <Notification
              theme="success"
              message={actionNotification.message}
            />
          ) : actionNotification.status === false ? (
            <Notification theme="error" message={actionNotification.message} />
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-[1px]">
          <ButtonContent
            onClick={() => navigate("/counter")}
            type="reset"
            text="Cancelar"
            theme="secondary"
          />
          <ButtonContent type="submit" text="Salvar" theme="primary" />
        </div>
      </form>
    </section>
  );
}
