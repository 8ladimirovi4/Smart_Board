import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconProps {
  id?: string;
  icon: IconProp;
  style?: React.CSSProperties;
  onClick?: () => void;
}
