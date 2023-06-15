import { useContext } from "react";
import AuthContext from "@/contexts/authContext";
import { Link } from "react-router-dom";
import { Logout, Menu } from "@carbon/icons-react";

export default function Header() {
  const { handleUserLogout, userSessionData } = useContext(AuthContext);

  return (
    <nav>
      <div className="flex justify-between items-center bg-text-01 text-bg-main-01 py-3 px-4">
        <div className="flex items-center gap-4">
          <Menu className="cursor-pointer" aria-label="Abrir menu" size={20} />
          <Link to={"/"}>
            <h1 className="text-md">Print Counter </h1>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            {userSessionData && (
              <p className="text-carbon-field text-md">
                {userSessionData.name}
              </p>
            )}
          </div>
          <Logout
            onClick={handleUserLogout}
            size={20}
            aria-label="Sair do sistema"
            className="cursor-pointer"
          />
          {/* <Button
            onClick={handleUserLogout}
            text="Sair"
            aria-label="Botão sair"
          /> */}
        </div>
      </div>
    </nav>
  );
}
