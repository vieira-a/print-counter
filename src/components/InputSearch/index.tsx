import { Search } from "@carbon/icons-react";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  (props, ref) => {
    return (
      <div className="relative w-full">
        <Search className="absolute m-4 " />
        <input
          {...props}
          ref={ref}
          className="w-full
          mt-[2px]
          text-sm 
          bg-carbon-field 
          px-10 py-[11px] 
          placeholder:text-carbon-field-placeholder
          outline-0
          border-b border-carbon-field-border
          focus:border-2 focus:border-carbon-field-focus
        "
        />
      </div>
    );
  }
);

export default InputSearch;
