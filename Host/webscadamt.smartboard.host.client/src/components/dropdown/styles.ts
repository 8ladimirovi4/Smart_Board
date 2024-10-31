import styled from '@emotion/styled';
import { Dropdown } from 'primereact/dropdown';
import { DropdownProps } from './types';

export const StyledDropdown = styled(Dropdown)<DropdownProps>`
  border: ${({ styles }) => {
    if (styles && styles.border) return styles.border;
  }};

  width: ${({ styles }) => {
    if (styles && styles.width) {
      return styles.width + 'px';
    }
    return '100%';
  }};
  min-width: ${({ styles }) => {
    if (styles && styles.minWidth) {
      return styles.minWidth + 'px';
    }
  }};
`;
