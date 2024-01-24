import { ButtonProps } from "../../interfaces/ui/ButtonProps";

export function Button({ children, type = "button", onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
