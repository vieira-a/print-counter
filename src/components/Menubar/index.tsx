import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

import { Link } from "react-router-dom";
import {
  Home,
  Printer,
  ChartBarFloating,
  Template,
  UserAvatar,
} from "@carbon/icons-react";

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
      <ul>
        {menuItems.map((item) => (
          <li>
            <Link key={item.id} to={`${item.page}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <ul className="flex flex-col gap-6">
        <li>
          <Link to={"/"}>
            <button>
              <Home size={20} />
            </button>
          </Link>
        </li>
        <li>
          <Link to={"printer"}>
            <button>
              <Printer size={20} />
            </button>
          </Link>
        </li>
        <li>
          <Link to={"counter"}>
            <button>
              <ChartBarFloating size={20} />
            </button>
          </Link>
        </li>
        <li>
          <Link to={"model"}>
            <button>
              <Template size={20} />
            </button>
          </Link>
        </li>
        {userSessionData.role === "admin" && (
          <li>
            <Link to={"user"}>
              <button>
                <UserAvatar size={20} />
              </button>
            </Link>
          </li>
        )}
      </ul> */}
    </nav>
  );
}
