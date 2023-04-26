interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="w-[30%] px-[13px] py-3 bg-carbon-brand hover:bg-carbon-brand-hover active:bg-carbon-brand-active text-carbon-text-inverse">
      {text}
    </button>
  );
}
