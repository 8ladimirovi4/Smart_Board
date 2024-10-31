import styled from '@emotion/styled';
import { MTLogo, SELogo } from 'assets';
import { Dropdown } from 'primereact/dropdown';
import { LogoProps } from './types';

export const StyledHeaderLogoWrapper = styled.div<LogoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'cursor')};
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledUserWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHeaderMtLogo = styled.img`
  height: 50px;
`;

StyledHeaderMtLogo.defaultProps = { src: MTLogo };

export const StyledHeaderSELogo = styled.img`
  height: 100px;
`;

export const StyledStyledAppLogoWrapper = styled.div`
  display: flex;
  span:last-child {
    font-weight: normal;
  }
`;

export const StyledAppLogo = styled.span`
  font-size: large;
  font-weight: bold;
  color: #00ac86;
`;

StyledHeaderSELogo.defaultProps = { src: SELogo };

export const StyledUser = styled(Dropdown)`
  &.p-dropdown {
    border: none;
  }
`;
