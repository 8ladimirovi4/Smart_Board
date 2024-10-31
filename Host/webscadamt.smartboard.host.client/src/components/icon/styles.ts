import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ color }) => {
    if (color) {
      return color;
    }
    return 'grey';
  }};
  width: 100%;
  height: 100%;
`;
