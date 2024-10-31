import ButtonComponent from 'components/button/ButtonComponent';
import { StyledButtonContainer, StyledMaintenanceColumn } from './styles';
import { PageWrapper } from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ToastComponent from 'components/toast/ToastComponent';

const Maintenance = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastData, setToastData] = useState<{ severity: string; summary: string; detail: string }>({
    severity: '',
    summary: '',
    detail: '',
  });

  const goToUpdate = () => navigate('/maintenance/update');
  const showInfo = (label: string) => {
    setToastData({
      severity: 'info',
      summary: label,
      detail: 'Модуль находится в разработке',
    });
    setShowToast((prev) => !prev);
  };

  return (
    <PageWrapper>
      <StyledMaintenanceColumn>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Обновление компонентов webscadamt'} onClick={goToUpdate} />
        </StyledButtonContainer>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Модуль сбора логов'} onClick={() => showInfo('Модуль сбора логов')} />
        </StyledButtonContainer>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Диагностика системы'} onClick={() => showInfo('Диагностика системы')} />
        </StyledButtonContainer>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Диагностика оборудования'} onClick={() => showInfo('Диагностика оборудования')} />
        </StyledButtonContainer>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent
            label={'Обновление системных компонентов'}
            onClick={() => showInfo('Обновление системных компонентов')}
          />
        </StyledButtonContainer>
      </StyledMaintenanceColumn>
      <ToastComponent
        severity={toastData.severity as 'success' | 'info' | 'warn' | 'error'}
        summary={toastData.summary}
        detail={toastData.detail}
        showToast={showToast}
      />
    </PageWrapper>
  );
};

export default Maintenance;
