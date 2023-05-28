import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

import Button from "../Button";

export default function Header() {
  const { handleUserLogout, userSessionData } = useContext(AuthContext);

  console.log(userSessionData);

  return (
    <nav>
      <div className="flex justify-between items-center bg-carbon-layer text-carbon-text-inverse px-4 py-[15px]">
        <div>
          <h2 className="font-semibold">Print Counter</h2>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            {userSessionData && (
              <p className="text-carbon-field">
                Boas vindas, {userSessionData.name}
              </p>
            )}
          </div>
          <Button
            onClick={handleUserLogout}
            text="Sair"
            aria-label="Botão sair"
          />
        </div>
      </div>
    </nav>
  );
}
