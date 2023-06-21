import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModelFormSchema } from "@/common/schemas/ModelFormSchema";

import { createModel } from "@/services/serviceModel";
import useActionNotification from "@/hooks/useActionNotification";

import ModelContext from "@/contexts/modelContext";

import { Close } from "@carbon/icons-react";
import ButtonContent from "@/components/ButtonContent";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Notification from "@/components/Notification";

import { IModel } from "@/common/interfaces/IModel";

export default function ModelForm() {
  const { setShouldUpdateModel } = useContext(ModelContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IModel>({ resolver: zodResolver(ModelFormSchema) });

  const { actionNotification, showActionNotification } =
    useActionNotification();

  const onSubmit = (data: IModel) => {
    const newModel: IModel = {
      model_brand: data.model_brand,
      model_name: data.model_name,
      model_oid_snmp_printed: data.model_oid_snmp_printed,
      model_oid_snmp_copied: data.model_oid_snmp_copied,
      model_oid_snmp_toner_level: data.model_oid_snmp_toner_level,
    };

    try {
      createModel(newModel);
      showActionNotification({
        status: true,
        message: "Modelo cadastrado com sucesso",
      });
      navigate("/model");
    } catch (error) {
      showActionNotification({
        status: true,
        message: "Erro ao cadastrar modelo",
      });
      console.log(error);
    }
    setShouldUpdateModel(true);
  };

  return (
    <section className="my-4 bg-bg-main-01 border border-border-00">
      <div className="flex justify-between items-center px-4 py-2 border-b border-b-border-00">
        <h4>Cadastro de modelos</h4>
        <Close
          onClick={() => navigate("/model")}
          size={24}
          className="cursor-pointer"
          aria-label="Fechar formulário"
        />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mobile:grid mobile:grid-cols-2 gap-4 px-4 my-8 flex flex-col">
            <label>
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
            <label>
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
            <label>
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
            <label>
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
            <label>
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
