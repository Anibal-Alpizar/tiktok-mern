import { forwardRef } from "react";
import { inputProps } from "../../interfaces/ui/inputProps";

export const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ type, placeholder, className, autoFocus, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        autoFocus={autoFocus}
        ref={ref}
        {...rest}
      />
    );
  }
);
