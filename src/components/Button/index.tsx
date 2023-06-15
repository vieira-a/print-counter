interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-brand-01 text-center font-bold text-xs hover:opacity-80 active:opacity-90 text-carbon-text-inverse`}
    >
      {text}
    </button>
  );
}
