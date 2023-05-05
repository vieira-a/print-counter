export default function PrinterFormEdit() {
  return (
    <section>
      <div>
        <h2>Alteração de impressora</h2>
      </div>
      <div>
        <p>
          Altere os campos com as informações necessárias para editar uma
          impressora cadastrada
        </p>
      </div>
      <form>
        <label>
          Número de série
          <input type="text" placeholder="Informe o número de série" />
        </label>

        <label>
          Fabricante
          <input type="text" placeholder="Informe o fabricante" />
        </label>

        <label>
          Modelo
          <input type="text" placeholder="Informe o modelo" />
        </label>

        <label>
          Localização
          <input type="text" placeholder="Informe o local de instalação" />
        </label>

        <label>
          Contador atual
          <input type="number" placeholder="Informe o contador atual" />
        </label>
      </form>
    </section>
  );
}
