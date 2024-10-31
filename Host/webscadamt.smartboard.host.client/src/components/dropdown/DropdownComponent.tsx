import { StyledDropdown } from './styles';
import { DropdownProps } from './types';
import './style.css';

const DropdownComponent = ({ value, options, placeholder, styles, onChange = () => {} }: DropdownProps) => {
  return (
    <StyledDropdown value={value} options={options} placeholder={placeholder} styles={styles} onChange={onChange} />
  );
};
export default DropdownComponent;
