import { Link } from "react-router-dom";
import ModalCard from "../ModalCard";
import Button from "../Button";

export default function BannerOptions() {
  return (
    <section className="flex gap-3 justify-end mt-3">
      <ModalCard
        title="Adicionar impressora"
        description="Cadastre uma nova impressora para iniciar o controle do seu contador"
      >
        <Link to={"printer/create"}>
          <Button text="Adicionar" />
        </Link>
      </ModalCard>
      <ModalCard
        title="Adicionar contador"
        description="Registre o contador atual para uma impressora cadastrada"
      >
        <Button text="Adicionar" />
      </ModalCard>
      <ModalCard
        title="Imprimir relatórios"
        description="Monte relatórios personalizados,  imprima ou exporte para um arquivo"
      >
        <Button text="Acessar" />
      </ModalCard>
    </section>
  );
}
