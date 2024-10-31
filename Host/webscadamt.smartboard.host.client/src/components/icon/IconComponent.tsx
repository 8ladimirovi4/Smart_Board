import { IconProps } from './types';
import { StyledIcon } from './styles';

const IconComponent = ({ id, icon, style, onClick = () => {} }: IconProps) => {
  return (
    <StyledIcon
      id={id}
      icon={icon}
      style={style}
      onClick={onClick}
    />
  );
};

export default IconComponent;
