import { IUserRegister } from "@/common/interfaces/IUser";

const API_URL = "http://localhost:3000/api/user/register";

const registerUser = async (user: IUserRegister, token: string) => {
  try {
    const response = await fetch(`${API_URL}`, {
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

export { registerUser };
