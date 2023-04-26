interface ButtonContentProps {
  theme?: "primary" | "secondary";
  text: string;
  className?: string;
}

export default function ButtonContent({
  text,
  theme,
  className,
}: ButtonContentProps) {
  return (
    <button
      className={`text-left text-carbon-text-inverse text-sm px-[13px] pt-3 pb-[28px]
      ${
        theme === "primary" &&
        "bg-carbon-brand hover:bg-carbon-brand-hover active:bg-carbon-brand-active"
      } 
      ${
        theme === "secondary" &&
        "bg-carbon-bg-secondary hover:bg-carbon-bg-secondary-hover active:bg-carbon-bg-secondary-active"
      } ${className}`}
    >
      {text}
    </button>
  );
}