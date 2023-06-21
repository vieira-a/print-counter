import { Search } from "@carbon/icons-react";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  (props, ref) => {
    return (
      <div className="relative w-full">
        <Search className="absolute mx-4 mt-3" />
        <input
          {...props}
          ref={ref}
          className="w-full
          text-sm 
          bg-bg-main-03
          px-10 py-2
          placeholder:text-carbon-field-placeholder
          outline-0
          focus:border-2 focus:border-border-02
        "
        />
      </div>
    );
  }
);

export default InputSearch;
