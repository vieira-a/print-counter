import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  selectLabel?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return (
    <select
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
    ></select>
  );
});

export default Select;
