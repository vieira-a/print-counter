import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

import Button from "../Button";

export default function Header() {
  const { handleUserLogout, userSession } = useContext(AuthContext);

  return (
    <nav>
      <div className="flex justify-between items-center bg-carbon-layer text-carbon-text-inverse px-4 py-[15px]">
        <h2 className="font-semibold">Print Counter</h2>
        <div>
          <div>
            {userSession.name && (
              <p className="text-carbon-field">{userSession.name}</p>
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
