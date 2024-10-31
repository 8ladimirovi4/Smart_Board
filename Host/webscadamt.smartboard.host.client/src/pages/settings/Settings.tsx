import { useNavigate } from 'react-router-dom';
import { PageWrapper, StyledSettingsColumn } from './styles';
import { StyledButtonContainer } from './styles';
import ButtonComponent from 'components/button/ButtonComponent';
import { useState } from 'react';
import ToastComponent from 'components/toast/ToastComponent';

const Settings = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastData, setToastData] = useState<{ severity: string; summary: string; detail: string }>({
    severity: '',
    summary: '',
    detail: '',
  });

  const goToProject = () => navigate('/settings/project');
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
      <StyledSettingsColumn>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Работа с проектом'} onClick={goToProject} />
        </StyledButtonContainer>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Системные настройки'} onClick={() => showInfo('Системные настройки')} />
        </StyledButtonContainer>
        <StyledButtonContainer width={300} height={100}>
          <ButtonComponent label={'Работа с устройствами'} onClick={() => showInfo('Работа с устройствами')} />
        </StyledButtonContainer>
      </StyledSettingsColumn>
      <ToastComponent
        severity={toastData.severity as 'success' | 'info' | 'warn' | 'error'}
        summary={toastData.summary}
        detail={toastData.detail}
        showToast={showToast}
      />
    </PageWrapper>
  );
};

export default Settings;
