import { ButtonProps } from "../../interfaces/ui/buttonProps";

export function Button({ children, type = "button", onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
