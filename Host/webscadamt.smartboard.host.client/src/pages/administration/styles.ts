import styled from '@emotion/styled';
import { ButtonContainerProps } from './types';
import { Toolbar } from 'primereact/toolbar';

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledRolesWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
`;

export const StyledIconWrapper = styled.div`
  height: 25px;
  width: 100%;
`;

export const StyledButtonContainer = styled.div<ButtonContainerProps>`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => (height ? height + 'px' : '100%')};
  .fa-plus,
  .fa-minus {
    font-size: 12px;
  }
  .fa-check-square,
  .fa-square {
  }
`;

export const StyledToolbar = styled(Toolbar)`
  &.p-toolbar .p-toolbar-group-start {
    width: 100%;
  }
`;

export const StyledToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const StyledToolbarHeader = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
`;

export const StyledToolbarControl = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
  width: 100%;
  padding-left: 10%;
`;
