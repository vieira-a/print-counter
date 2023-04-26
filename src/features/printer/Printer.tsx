import ModalCard from "../../components/ModalCard";

export default function Printer() {
  return (
    <main className="h-screen bg-carbon-white p-4">
      <section className="flex gap-4 justify-end ">
        <ModalCard
          title="Adicionar impressora"
          description="Cadastre uma nova impressora para iniciar o controle do seu contador"
          buttonText="Adicionar"
        />
        <ModalCard
          title="Adicionar contador"
          description="Registre o contador atual para uma impressora cadastrada"
          buttonText="Adicionar"
        />
        <ModalCard
          title="Imprimir relatórios"
          description="Monte relatórios personalizados,  imprima ou exporte para um arquivo"
          buttonText="Acessar"
        />
      </section>
    </main>
  );
}
