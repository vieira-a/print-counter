import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModelFormSchema } from "@/common/schemas/ModelFormSchema";
import { IModel } from "@/common/interfaces/IModel";
import ModelContext from "@/contexts/modelContext";

import useActionNotification from "@/hooks/useActionNotification";

import { getModelById } from "@/services/serviceModel";
import { updateModel } from "@/services/serviceModel";
import ButtonContent from "@/components/ButtonContent";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Notification from "@/components/Notification";
import { Close } from "@carbon/icons-react";

export default function ModelFormEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { actionNotification, showActionNotification } =
    useActionNotification();

  const { setShouldUpdateModel } = useContext(ModelContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IModel>({ resolver: zodResolver(ModelFormSchema) });

  const [selectModelToEdit, setSelectModelToEdit] = useState<IModel>();

  useEffect(() => {
    const handleGetModelById = async () => {
      if (id) {
        const data = await getModelById(id);
        setSelectModelToEdit(data);
      }
    };
    handleGetModelById();
  }, [id]);

  const onSubmit = async (data: IModel) => {
    const updatedModel: IModel = {
      model_brand: data.model_brand,
      model_name: data.model_name,
      model_oid_snmp_printed: data.model_oid_snmp_printed,
      model_oid_snmp_copied: data.model_oid_snmp_copied,
      model_oid_snmp_toner_level: data.model_oid_snmp_toner_level,
    };
    try {
      if (selectModelToEdit?._id) {
        await updateModel(selectModelToEdit._id, updatedModel);
        showActionNotification({
          status: true,
          message: "Modelo atualizado com sucesso.",
        });
        navigate("/model");
      }
    } catch (error) {
      showActionNotification({
        status: false,
        message: "Erro ao atualizar modelo.",
      });
      console.log(error);
    }
    setShouldUpdateModel(true);
  };

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Alteração de modelo</h2>
          <Close
            onClick={() => navigate("/model")}
            size={24}
            className="cursor-pointer"
            aria-label="Fechar formulário"
          />
        </div>
        <div>
          <p className="w-[85%]">
            Altere os campos com as informações necessárias para editar o modelo
            de impressora
          </p>
        </div>
      </div>
      <div>
        {selectModelToEdit && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-8 px-4 my-8">
              <label className="text-xs text-carbon-label">
                Fabricante
                <Input
                  type="text"
                  placeholder="Informe o nome do fabricante"
                  {...register("model_brand")}
                  defaultValue={selectModelToEdit.model_brand}
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
                  defaultValue={selectModelToEdit.model_name}
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
                  defaultValue={selectModelToEdit.model_oid_snmp_printed}
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
                  defaultValue={selectModelToEdit.model_oid_snmp_copied}
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
                  defaultValue={selectModelToEdit.model_oid_snmp_toner_level}
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
                onClick={() => navigate("/model")}
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
