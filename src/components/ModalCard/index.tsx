import { ReactNode } from "react";

interface ModalCardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function ModalCard({
  title,
  description,
  children,
}: ModalCardProps) {
  return (
    <article className="bg-carbon-bg-modal w-full">
      <div className="flex flex-col gap-4 p-4">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="text-right">{children}</div>
    </article>
  );
}
