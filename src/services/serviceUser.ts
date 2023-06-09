import { IUserRegister } from "@/common/interfaces/IUser";

const API_URL = "http://localhost:3000/api/user";

const registerUser = async (user: IUserRegister, token: string) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    const registerUserData = await response.json();
    console.log(registerUserData);
  } catch (error) {
    console.log(`Erro ao criar usuário: ${error}`);
  }
};

const getUser = async (token: string) => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Erro ao obter lista de usuários ${error}`);
    return [];
  }
};

const deleteUser = async (id: string, token: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      console.log("Usuário excluído com sucesso");
    }
  } catch (error) {
    console.log(`Erro ao excluir usuário ${error}`);
  }
};

export { registerUser, getUser, deleteUser };
