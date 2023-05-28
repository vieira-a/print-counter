import { IUserLogin } from "@/common/interfaces/IAuth";

const API_URL = "http://localhost:3000/api/user";

const createSession = async (user: IUserLogin) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const userSessionData = await response.json();
    return userSessionData;
  } catch (error) {
    console.log(`Erro na tentativa de login ${error}`);
  }
};

const getUserById = async (id: string, token: string) => {
  try {
    if (id && token) {
      const response = await fetch(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userSessionData = await response.json();
      return userSessionData;
    }
  } catch (error) {
    console.log(`Erro ao obter dados do usuário ID ${id}: ${error}`);
  }
};

export { createSession, getUserById };
