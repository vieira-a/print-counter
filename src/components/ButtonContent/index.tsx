interface ButtonContentProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: "primary" | "secondary" | "danger";
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function ButtonContent({
  text,
  theme,
  className,
  type,
  onClick,
}: ButtonContentProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full text-left text-carbon-text-inverse text-sm px-[13px] pt-3 pb-[28px]
      ${theme === "primary" && "bg-brand-01 hover:opacity-80 active:opacity-90"}
      ${
        theme === "danger" &&
        "bg-carbon-bg-danger hover:bg-carbon-bg-danger-hover active:bg-carbon-bg-danger-active"
      }
      ${
        theme === "secondary" &&
        "bg-carbon-bg-secondary hover:bg-carbon-bg-secondary-hover active:bg-carbon-bg-secondary-active"
      } ${className} `}
    >
      {text}
    </button>
  );
}
