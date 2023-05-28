import Input from "@/components/Input";
import ButtonContent from "@/components/ButtonContent";

export default function Login() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="min-w-[450px] bg-carbon-bg-modal">
        <div className="pt-4 pb-8 border-b border-carbon-field-border px-4">
          <h2>Login</h2>
          <div className="flex gap-1">
            <p>Não possui uma conta?</p>
            <p className="underline text-carbon-field-focus">Crie uma conta</p>
          </div>
        </div>
        <form>
          <fieldset className="flex flex-col gap-4 py-6 px-4 mb-4">
            <label>
              E-mail
              <Input type="email" placeholder="username@email.com" />
            </label>
            <label>
              Senha
              <Input type="password" placeholder="********" />
            </label>
          </fieldset>
          <div className="w-[50%]">
            <ButtonContent theme="primary" text="Entrar" />
          </div>
        </form>
      </section>
    </main>
  );
}
