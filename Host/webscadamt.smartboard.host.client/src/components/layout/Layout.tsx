import HeaderComponent from 'components/header/HeaderComponent';
import SideBarComponent from 'components/sidebar/SideBarComponent';
import {
  StyledAppWrapper,
  StyledMainWrapper,
  StyledHeaderWrapper,
  StyledSideBarWrapper,
  StyledPageWrapper,
} from './styles';
import { LayoutProps } from './types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledAppWrapper>
      <StyledHeaderWrapper>
        <HeaderComponent />
      </StyledHeaderWrapper>
      <StyledMainWrapper>
        <StyledSideBarWrapper>
          <SideBarComponent />
        </StyledSideBarWrapper>
        <StyledPageWrapper>{children}</StyledPageWrapper>
      </StyledMainWrapper>
    </StyledAppWrapper>
  );
};

export default Layout;
