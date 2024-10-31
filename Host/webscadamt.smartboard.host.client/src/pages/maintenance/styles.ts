import styled from '@emotion/styled';
import { ButtonContainerProps } from './types';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 100px;
  padding: 50px;
  flex: 1;
`;

export const StyledButtonContainer = styled.div<ButtonContainerProps>`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => (height ? height + 'px' : '100%')};
`;

export const StyledMaintenanceColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  width: 650px;
`;

export const StyledUpdateColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 15px;
`;
