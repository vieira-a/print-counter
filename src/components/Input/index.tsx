import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
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
  );
});

export default Input;
