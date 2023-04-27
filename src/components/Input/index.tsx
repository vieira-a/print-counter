interface InputTextProps {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  onChange?: () => void;
}

export default function Input({
  label,
  name,
  placeholder,
  type,
  onChange,
}: InputTextProps) {
  return (
    <label htmlFor={name} className="text-xs text-carbon-label">
      {label}
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full
        mt-1
        text-sm 
        bg-carbon-field 
        px-4 py-[11px] 
        placeholder:text-carbon-field-placeholder
        outline-0
        border-b border-carbon-field-border
        focus:border-2 focus:border-carbon-field-focus
      "
      />
    </label>
  );
}