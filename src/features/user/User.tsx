import { useContext, useEffect } from "react";
import UserContext from "@/contexts/userContext";
import Button from "@/components/Button";
import InputSearch from "@/components/InputSearch";
import { useNavigate } from "react-router-dom";
import Notification from "@/components/Notification";
import useActionNotification from "@/hooks/useActionNotification";
import useGetSessionToken from "@/hooks/useGetSessionToken";
import { deleteUser } from "@/services/serviceUser";

export default function User() {
  const navigate = useNavigate();

  const { sessionToken, getSessionToken } = useGetSessionToken();

  const { showActionNotification, actionNotification } =
    useActionNotification();

  const { users } = useContext(UserContext);

  useEffect(() => {
    getSessionToken();
    console.log(sessionToken);
  }, [getSessionToken, sessionToken]);

  const handleDeleteUser = (id: string) => {
    if (confirm("Deseja realmente excluir o usuário?")) {
      try {
        deleteUser(id, sessionToken);
        showActionNotification({
          status: true,
          message: "Usuário excluído com sucesso.",
        });
      } catch (error) {
        console.log(`Erro ao excluir usuário: ${error}`);
        showActionNotification({
          status: false,
          message: "Erro ao excluir usuário.",
        });
      }
    }
  };

  return (
    <section className="bg-carbon-bg-modal">
      <div className="px-4 pt-6 pb-8">
        <h2>Usuários cadastrados</h2>
        <p>Clique nas ações selecionadas para editar ou excluir usuários</p>
      </div>
      <div className="gap-[1px] flex items-center">
        <div className="flex gap-[1px] items-center w-full">
          <div className="w-full">
            <InputSearch
              //onChange={handleSearchSerialChange}
              type="search"
              placeholder="Digite o número de série para buscar uma impressora"
            />
          </div>
          <div>
            <Button
              onClick={() => navigate("/user/register")}
              text="Adicionar"
              aria-label="Cadastrar nova impressora"
            />
          </div>
        </div>
      </div>
      <table className="w-full bg-carbon-bg-modal">
        <thead>
          <tr className="text-left text-sm bg-carbon-table-head">
            <th className="pt-6 pb-8 px-4">Nome</th>
            <th className="pt-6 pb-8 px-4">E-mail</th>
            <th className="pt-6 pb-8 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item._id}>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.name}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                {item.email}
              </td>
              <td className="py-2 px-4 border-b border-b-carbon-field-border text-sm">
                <div className="flex gap-1">
                  <Button
                    onClick={() => navigate(`/user/edit/${item._id}`)}
                    className="w-[25%]"
                    text="Alterar"
                  />
                  <Button
                    onClick={() => handleDeleteUser(item._id)}
                    className="w-[25%]"
                    text="Excluir"
                  />
                </div>
              </td>
            </tr>
          ))}
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
