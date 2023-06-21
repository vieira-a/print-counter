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
    <section className="my-4 bg-bg-main-01 border border-border-00">
      <div className="px-4 py-2 flex justify-between items-center border-b border-border-00">
        <h4>Modelos cadastrados</h4>
        <Button
          onClick={() => navigate("/model/create")}
          text="Adicionar"
          aria-label="Cadastrar novo modelo de impressora"
        />
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
        </div>
      </div>
      <table className="w-full">
        <thead className="border-b border-b-border-02 border-t border-t-border-00">
          <tr className="text-left text-xs">
            <th className="p-4">MARCA</th>
            <th className="p-4">MODELO</th>
            <th className="p-4">OID IMPRESSÕES</th>
            <th className="p-4">OID CÓPIAS</th>
            <th className="p-4">OID NÍVEL DE TONER</th>
            <th className="p-4">AÇÕES</th>
          </tr>
        </thead>
        <tbody className="font-light">
          {modelGrid.length > 0 ? (
            modelGrid.map((item) => (
              <tr key={item._id}>
                <td className="py-1 px-4 border-b border-b-border-00 text-sm">
                  {item.model_brand}
                </td>
                <td className="py-1 px-4 border-b border-b-border-00 text-sm">
                  {item.model_name}
                </td>
                <td className="py-1 px-4 border-b border-b-border-00 text-sm">
                  {item.model_oid_snmp_printed}
                </td>
                <td className="py-1 px-4 border-b border-b-border-00 text-sm">
                  {item.model_oid_snmp_copied}
                </td>
                <td className="py-1 px-4 border-b border-b-border-00 text-sm">
                  {item.model_oid_snmp_toner_level}
                </td>
                <td className="py-1 px-4 border-b border-b-border-00 text-sm">
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
