import { ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import InputSearch from "@/components/InputSearch";
import Notification from "@/components/Notification";
import ModelContext from "@/contexts/modelContext";

import { deleteModel } from "@/services/serviceModel";
import useActionNotification from "@/hooks/useActionNotification";

export default function Model() {
  const navigate = useNavigate();

  const { actionNotification, showActionNotification } =
    useActionNotification();

  const { modelGrid, setShouldUpdateModel, setSearchModel } =
    useContext(ModelContext);

  const handleDeleteModel = (id: string) => {
    if (confirm("Deseja realmente excluir o modelo?")) {
      deleteModel(id)
        .then(() => {
          showActionNotification({
            status: true,
            message: "Modelo excluído com sucesso",
          });
        })
        .catch((error) => {
          console.log(`Error: ${error.message}`);
          showActionNotification({
            status: false,
            message: "Erro ao excluir o modelo",
          });
        });
    }
    setShouldUpdateModel(true);
  };

  const handleSearchModelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchModel(value);
  };

  return (
    <section className="bg-carbon-bg-modal">
      <div className="px-4 pt-6 pb-8">
        <h2>Modelos cadastrados</h2>
        <p>
          Clique nas ações selecionadas para editar ou excluir um modelo de
          impressora
        </p>
      </div>
      <div className="gap-[1px] flex items-center">
        <div className="flex gap-[1px] items-center w-full">
          <div className="w-full">
            <InputSearch
              onChange={handleSearchModelChange}
              type="search"
              placeholder="Digite um modelo para buscar"
            />
          </div>
          <div>
            <Button
              onClick={() => navigate("/model/create")}
              text="Adicionar"
              aria-label="Cadastrar novo modelo de impressora"
            />
          </div>
        </div>
      </div>
      <table className="w-full bg-carbon-bg-modal">
        <thead>
          <tr className="text-left text-sm bg-carbon-table-head">
            <th className="pt-6 pb-8 px-4">Marca</th>
            <th className="pt-6 pb-8 px-4">Modelo</th>
            <th className="pt-6 pb-8 px-4">OID impressões</th>
            <th className="pt-6 pb-8 px-4">OID cópias</th>
            <th className="pt-6 pb-8 px-4">OID nível de toner</th>
            <th className="pt-6 pb-8 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {modelGrid.length > 0 ? (
            modelGrid.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                  {item.model_brand}
                </td>
                <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                  {item.model_name}
                </td>
                <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                  {item.model_oid_snmp_printed}
                </td>
                <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                  {item.model_oid_snmp_copied}
                </td>
                <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                  {item.model_oid_snmp_toner_level}
                </td>
                <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                  <div className="flex gap-1">
                    <Button
                      onClick={() => navigate(`/model/edit/${item._id}`)}
                      className="w-[25%]"
                      text="Alterar"
                    />
                    <Button
                      onClick={() => handleDeleteModel(`${item._id}`)}
                      className="w-[25%]"
                      text="Excluir"
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <Notification
                  theme="warning"
                  message="Não há dados a exibir."
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        {actionNotification.status === true ? (
          <Notification theme="success" message={actionNotification.message} />
        ) : actionNotification.status === false ? (
          <Notification theme="error" message={actionNotification.message} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
