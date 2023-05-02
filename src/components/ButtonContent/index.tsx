interface ButtonContentProps {
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
      ${
        theme === "primary" &&
        "bg-carbon-brand hover:bg-carbon-brand-hover active:bg-carbon-brand-active"
      }
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
