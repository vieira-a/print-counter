import { HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-carbon-error-message">{message}</p>;
}
