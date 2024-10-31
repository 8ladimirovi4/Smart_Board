import { ChipProps } from './types';
import { StyledChip } from './styles';

const ChipComponent = ({ label, removable }: ChipProps) => {
  return <StyledChip label={label} removable={removable} />;
};

export default ChipComponent;
