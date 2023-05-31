import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModelFormSchema } from "@/common/schemas/ModelFormSchema";

import { Close } from "@carbon/icons-react";
import ButtonContent from "@/components/ButtonContent";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Notification from "@/components/Notification";

import { IModel } from "@/common/interfaces/IModel";
import { IModelContext } from "@/common/interfaces/IModel";

export default function ModelForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IModel>({ resolver: zodResolver(ModelFormSchema) });

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Cadastro de modelos</h2>
          <Close
            onClick={() => navigate("/printer")}
            size={24}
            className="cursor-pointer"
            aria-label="Fechar formulário"
          />
        </div>
        <div>
          <p className="w-[85%]">
            Preencha os campos com as informações necessárias para cadastrar um
            novo modelo de impressora
          </p>
        </div>
      </div>
      <div>
        <form>
          <div className="grid grid-cols-2 gap-8 px-4 my-8">
            <label className="text-xs text-carbon-label">
              Fabricante
              <Input
                type="text"
                placeholder="Informe o nome do fabricante"
                {...register("model_brand")}
              />
              {errors.model_brand && (
                <ErrorMessage
                  data-testid="error-model_brand"
                  message={`${errors.model_brand.message}`}
                />
              )}
            </label>
            <label className="text-xs text-carbon-label">
              Modelo
              <Input
                type="text"
                placeholder="Informe o modelo"
                {...register("model_name")}
              />
              {errors.model_name && (
                <ErrorMessage
                  data-testid="error-model_name"
                  message={`${errors.model_name.message}`}
                />
              )}
            </label>
            <label className="text-xs text-carbon-label">
              OID número de impressões
              <Input
                type="text"
                placeholder="Informe o código SNMP para impressões"
                {...register("model_oid_snmp_printed")}
              />
              {errors.model_oid_snmp_printed && (
                <ErrorMessage
                  message={`${errors.model_oid_snmp_printed.message}`}
                />
              )}
            </label>
            <label className="text-xs text-carbon-label">
              OID número de cópias
              <Input
                type="text"
                placeholder="Informe o código SNMP para cópias"
                {...register("model_oid_snmp_copied")}
              />
              {errors.model_oid_snmp_copied && (
                <ErrorMessage
                  message={`${errors.model_oid_snmp_copied.message}`}
                />
              )}
            </label>
            <label className="text-xs text-carbon-label">
              OID nível de toner
              <Input
                type="text"
                placeholder="Informe o código SNMP para nível de toner"
                {...register("model_oid_snmp_toner_level")}
              />
              {errors.model_oid_snmp_toner_level && (
                <ErrorMessage
                  message={`${errors.model_oid_snmp_toner_level.message}`}
                />
              )}
            </label>
          </div>
          {/*           
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
          </div> */}
          <div className="flex gap-[1px]">
            <ButtonContent
              onClick={() => navigate("/")}
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