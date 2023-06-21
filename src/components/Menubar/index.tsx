import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

import { Link } from "react-router-dom";

export default function MenuBar() {
  const { userSessionData } = useContext(AuthContext);

  const menuItems = [
    {
      id: 1,
      title: "Home",
      page: "/",
    },
    {
      id: 2,
      title: "Modelos",
      page: "model",
    },
    {
      id: 3,
      title: "Impressoras",
      page: "printer",
    },
    {
      id: 4,
      title: "Contadores",
      page: "counter",
    },
  ];

  return (
    <nav>
      <ul className="flex gap-6">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={`${item.page}`}>{item.title}</Link>
          </li>
        ))}
        {userSessionData.role === "admin" && (
          <li>
            <Link to={"user"}>Usuários</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
