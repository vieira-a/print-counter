import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "@/contexts/userContext";
import Button from "@/components/Button";

export default function User() {
  return (
    <>
      <h2>User</h2>
      <Link to={"register"}>
        <Button text="Adicionar" />
      </Link>
    </>
  );
}
