interface Event {
  value: string;
}

export interface DropdownProps {
  value?: string | boolean | undefined;
  options: { label: string; value: string }[];
  placeholder?: string;
  className?: string;
  styles?: React.CSSProperties;
  onChange: (evt: Event) => void;
}
