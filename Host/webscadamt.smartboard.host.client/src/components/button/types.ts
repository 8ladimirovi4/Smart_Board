//type ButtonTypes = "button" | "submit" | "reset" | undefined;

import { ReactElement } from "react";

export interface ButtonProps {
  icon?: ReactElement;
  disabled?: boolean;
  className?: string;
  label?: string;
  onClick: () => void;
}
