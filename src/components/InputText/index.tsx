interface InputTextProps {
  name: string;
  placeholder: string;
}

export default function InputText({ name, placeholder }: InputTextProps) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full 
        bg-carbon-field 
        px-4 py-[15px] 
        placeholder:text-carbon-field-placeholder
        outline-0
        border-b border-carbon-field-border
        focus:border-2 focus:border-carbon-field-focus
      "
    />
  );
}
