import { ChangeEvent } from "react";

export interface FileInputProps {
  onchange: (event: ChangeEvent<HTMLInputElement>) => void;
}
