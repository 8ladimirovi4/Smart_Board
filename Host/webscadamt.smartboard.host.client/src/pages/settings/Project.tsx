import ButtonComponent from 'components/button/ButtonComponent';
import { PageWrapper, StyledButtonContainer, StyledProjectColumn } from './styles';

const Project = () => {
  return (
    <PageWrapper>
      <StyledProjectColumn>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Загрузить'} onClick={() => {}} />
        </StyledButtonContainer>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Скачать'} onClick={() => {}} />
        </StyledButtonContainer>
      </StyledProjectColumn>
    </PageWrapper>
  );
};

export default Project;
