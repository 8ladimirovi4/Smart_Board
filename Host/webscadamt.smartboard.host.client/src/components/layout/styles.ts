import styled from '@emotion/styled';
import { colors } from 'styles/colors';

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
`;

export const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  flex: 0 0 10%; /* flex-basis на 10% */
  min-height: 100px;
  border-bottom: 10px solid ${colors.technoGreen};
`;

export const StyledMainWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;

export const StyledSideBarWrapper = styled.aside`
  display: flex;
  flex: 0 0 5%; /* flex-basis на 5% */
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 2; /* 4px — горизонтальное смещение 0 — вертикальное смещение 8px — радиус размытия rgba(0, 0, 0, 0.2) задаёт чёрный цвет с прозрачностью 20% (0.2) */
`;

export const StyledPageWrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100px;
  flex-direction: column;
  padding: 1px;
  overflow: auto;
`;
