import { Link, useNavigate } from 'react-router-dom';
import './styles.ts';
import { StyledNotFoundContainer, StyledNotFoundMessage, StyledNotFoundTitle } from './styles';

const PageNotFound = () => {
  const navigate = useNavigate();
  const goToHomePage = () => navigate('/');

  return (
    <StyledNotFoundContainer>
      <StyledNotFoundTitle>404</StyledNotFoundTitle>
      <StyledNotFoundMessage className="not-found-message">Страница не найдена</StyledNotFoundMessage>
    </StyledNotFoundContainer>
  );
};

export default PageNotFound;
