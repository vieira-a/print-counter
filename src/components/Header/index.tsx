import { useContext } from "react";
import AuthContext from "@/contexts/authContext";
import { Link } from "react-router-dom";

import Button from "../Button";

export default function Header() {
  const { handleUserLogout, userSessionData } = useContext(AuthContext);

  return (
    <nav>
      <div className="flex justify-between items-center bg-carbon-layer text-carbon-text-inverse px-4 py-[15px]">
        <div>
          <Link to={"/"}>
            <h2 className="font-semibold">Print Counter</h2>
          </Link>
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
