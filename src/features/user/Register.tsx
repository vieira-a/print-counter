import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegisterSchema } from "@/common/schemas/userRegisterSchema";
import { Close } from "@carbon/icons-react";
import { IUserRegister, IUserRole } from "@/common/interfaces/IUser";

import Select from "@/components/Select";
import Input from "@/components/Input";
import ButtonContent from "@/components/ButtonContent";
import ErrorMessage from "@/components/ErrorMessage";
import Notification from "@/components/Notification";

import useActionNotification from "@/hooks/useActionNotification";
import useGetSessionToken from "@/hooks/useGetSessionToken";
import { registerUser } from "@/services/serviceUser";

import UserContext from "@/contexts/userContext";
import React, { useContext, useEffect, useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const { userRole, setShouldUpdateUsers } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: zodResolver(UserRegisterSchema),
  });

  const { sessionToken, getSessionToken } = useGetSessionToken();

  const { actionNotification, showActionNotification } =
    useActionNotification();

  const [userRoleSelect, setUserRoleSelect] = useState("");

  useEffect(() => {
    getSessionToken();
  }, [getSessionToken]);

  const onSubmit = (data: IUserRegister) => {
    const newUser: IUserRegister = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
      role: (data.role = userRoleSelect),
    };

    try {
      registerUser(newUser, sessionToken);
      showActionNotification({
        status: true,
        message: "Cadastrado com sucesso",
      });
    } catch (error) {
      showActionNotification({
        status: false,
        message: "Erro ao cadastrar novo usuário",
      });
      console.log(error);
    }
    setShouldUpdateUsers(true);
  };

  const handleSelectUserRole = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = event.target.value;
    setUserRoleSelect(selectedOption);
  };

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div className="relative px-4">
        <div className="flex justify-between py-4">
          <h2>Cadastro de usuário</h2>
          <Close
            onClick={() => navigate("/user")}
            size={24}
            className="cursor-pointer"
            aria-label="Fechar formulário"
          />
        </div>
        <div>
          <p className="w-[85%]">
            Preencha os campos com as informações necessárias para cadastrar um
            novo usuário
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-8 px-4 my-8">
          <label className="text-xs text-carbon-label">
            Nome completo
            <Input type="string" {...register("name")} />
            {errors.name && <ErrorMessage message={`${errors.name.message}`} />}
          </label>
          <label className="text-xs text-carbon-label">
            E-mail
            <Input type="string" {...register("email")} />
            {errors.email && (
              <ErrorMessage message={`${errors.email.message}`} />
            )}
          </label>
          <label className="text-xs text-carbon-label">
            Senha
            <Input type="password" {...register("password")} />
            {errors.password && (
              <ErrorMessage message={`${errors.password.message}`} />
            )}
          </label>
          <label className="text-xs text-carbon-label">
            Confirmação de senha
            <Input type="password" {...register("confirmpassword")} />
            {errors.confirmpassword && (
              <ErrorMessage message={`${errors.confirmpassword.message}`} />
            )}
          </label>
        </div>
        <div className="grid grid-cols-2 gap-8 px-4 my-8">
          <label className="text-xs text-carbon-label">
            Perfil de usuário
            <Select onChange={handleSelectUserRole}>
              <option>Selecione um perfil de usuário</option>
              {userRole.map((role: IUserRole) => (
                <option key={role.id} {...register("role")}>
                  {role.name}
                </option>
              ))}
            </Select>
          </label>
        </div>
        <div className="px-4">
          {actionNotification.status === true ? (
            <Notification
              theme="success"
              message={actionNotification.message}
            />
          ) : actionNotification.status === false ? (
            <Notification theme="error" message={actionNotification.message} />
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-[1px]">
          <ButtonContent
            onClick={() => navigate("/user")}
            type="reset"
            text="Cancelar"
            theme="secondary"
          />
          <ButtonContent type="submit" text="Salvar" theme="primary" />
        </div>
      </form>
    </section>
  );
}
