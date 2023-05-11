import { InputHTMLAttributes, forwardRef } from "react";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>((props, ref) => {
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

export default InputSearch;
