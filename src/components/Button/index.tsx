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
      className={`px-[24px] py-3 bg-carbon-brand text-center hover:bg-carbon-brand-hover active:bg-carbon-brand-active text-carbon-text-inverse`}
    >
      {text}
    </button>
  );
}
