export default function Dashboard() {
  return (
    <section className="px-16 py-4 grid grid-cols-3 gap-4 ">
      <div className="bg-bg-main-01 border border-border-01">
        <div className="py-2 px-4">
          <p className="text-text-01 text-xs font-bold">Resumo de recursos</p>
        </div>
      </div>
      <div className="bg-bg-main-01 border border-border-01">
        <div className="py-2 px-4">
          <p className="text-text-01 text-xs font-bold">Manutenção</p>
        </div>
      </div>
      <div className="bg-bg-main-01 border border-border-01">
        <div className="py-2 px-4">
          <p className="text-text-01 text-xs font-bold">Estados locais</p>
        </div>
      </div>
    </section>
  );
}
