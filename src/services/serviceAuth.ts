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

export { createSession };
