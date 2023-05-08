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
    <article className="w-full bg-carbon-bg-modal flex flex-col justify-between">
      <div className="flex flex-col gap-4 p-4">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="text-right">{children}</div>
    </article>
  );
}
