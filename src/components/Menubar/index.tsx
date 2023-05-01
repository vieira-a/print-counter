import { Link } from "react-router-dom";
import { Home, Printer, ChartBarFloating } from "@carbon/icons-react";

export default function MenuBar() {
  return (
    <nav className="px-4 absolute left-0 top-[70px]">
      <ul className="flex flex-col gap-6">
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
      </ul>
    </nav>
  );
}
