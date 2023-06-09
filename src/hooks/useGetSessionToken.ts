import { useState } from "react";

const useGetSessionToken = () => {
  const [sessionToken, setSessionToken] = useState("");

  const getSessionToken = () => {
    try {
      const userDataInLocalStorage = localStorage.getItem("user");
      if (userDataInLocalStorage) {
        const { token } = JSON.parse(userDataInLocalStorage);
        setSessionToken(token);
      } else {
        console.log(`Não há dados`);
      }
    } catch (error) {
      console.log(`Erro ao obter token: ${error}`);
    }
  };

  return { getSessionToken, sessionToken };
};

export default useGetSessionToken;
