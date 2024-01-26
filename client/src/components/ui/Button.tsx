import { buttonProps } from "../../interfaces/ui/buttonProps";

export function Button({
  children,
  type = "button",
  onClick,
  disabled,
  className,
}: buttonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}
