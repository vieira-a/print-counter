import { useContext, useEffect, useState } from "react";
import AuthContext from "@/contexts/authContext";
import { useNavigate } from "react-router-dom";

import { createSession } from "@/services/serviceAuth";

import Input from "@/components/Input";
import ButtonContent from "@/components/ButtonContent";
import Notification from "@/components/Notification";

export default function Login() {
  const navigate = useNavigate();
  const {
    userLogin,
    setUserLogin,
    userSession,
    setUserSession,
    userAuthenticated,
  } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleUserLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userSessionDataLogin = await createSession(userLogin);
      setUserSession(userSessionDataLogin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserLoginData = () => {
      setUserLogin({
        email: userEmail,
        password: userPassword,
      });
    };
    getUserLoginData();
  }, [setUserLogin, userEmail, userPassword]);

  useEffect(() => {
    if (userAuthenticated) {
      navigate("/");
    }
  });

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="min-w-[450px] bg-carbon-bg-modal">
        <div className="pt-4 pb-8 border-b border-carbon-field-border px-4">
          <h2>Login</h2>
          <div className="flex gap-1">
            <p>Não possui uma conta?</p>
            <p className="underline text-carbon-field-focus">Crie uma conta</p>
          </div>
        </div>
        <form onSubmit={handleUserLogin}>
          <fieldset className="flex flex-col gap-4 py-6 px-4 mb-4">
            <label>
              E-mail
              <Input
                type="email"
                placeholder="username@email.com"
                onChange={(event) => setUserEmail(event.target.value)}
              />
            </label>
            <label>
              Senha
              <Input
                type="password"
                placeholder="********"
                onChange={(event) => setUserPassword(event.target.value)}
              />
            </label>
          </fieldset>
          <div className="px-4">
            {userSession.msg && (
              <Notification theme="error" message={userSession.msg} />
            )}
          </div>
          <div className="w-[50%]">
            <ButtonContent theme="primary" text="Entrar" />
          </div>
        </form>
      </section>
    </main>
  );
}
