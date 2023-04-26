import Button from "../Button";
import InputText from "../InputText";

interface ModalCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function ModalCard({
  title,
  description,
  buttonText,
}: ModalCardProps) {
  return (
    <article className="bg-carbon-bg-modal w-full">
      <div className="flex flex-col gap-4 p-4">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="text-right">
        <Button text={buttonText} />
      </div>
      <InputText name="name" placeholder="InputText" />
    </article>
  );
}
