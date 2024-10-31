import DropdownComponent from 'components/dropdown/DropdownComponent';
import { useEffect, useState } from 'react';
import {
  StyledHeaderMtLogo,
  StyledHeaderLogoWrapper,
  StyledHeaderSELogo,
  StyledInfoWrapper,
  StyledUserWrapper,
  StyledAppLogo,
  StyledStyledAppLogoWrapper,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { NodeService } from './data';
import { UserAuthProps } from './types';

const HeaderComponent = () => {
  const [user, setUser] = useState<string>('Пользователь не авторизован');
  const [userOptions, setUserOptions] = useState<UserAuthProps[]>([]);

  useEffect(() => {
    NodeService.getUser().then((data: any) => setUserOptions(data));
  }, []);

  const handleDropdownChange = (value: string) => {
    switch (value) {
      case '1':
        setUser('Пользователь авторизован');
        setUserOptions([{ label: 'Выйти', value: '2' }]);
        break;

      case '2':
        setUser('Пользователь не авторизован');
        setUserOptions([{ label: 'Войти', value: '1' }]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StyledHeaderLogoWrapper isPointer={false}>
        <StyledHeaderMtLogo />
        <StyledStyledAppLogoWrapper>
          <StyledAppLogo>Systeme</StyledAppLogo>
          <StyledAppLogo>Smart</StyledAppLogo>
        </StyledStyledAppLogoWrapper>
      </StyledHeaderLogoWrapper>
      <StyledInfoWrapper>{/* <h2>Информационная область</h2> */}</StyledInfoWrapper>
      {userOptions && userOptions.length ? (
        <StyledUserWrapper>
          <DropdownComponent
            onChange={(evt) => handleDropdownChange(evt.value)}
            options={userOptions}
            placeholder={user}
            className="w-full md:w-14rem"
            styles={{ border: 'none', width: '310px' }}
          />
        </StyledUserWrapper>
      ) : (
        <></>
      )}
      <StyledHeaderLogoWrapper isPointer={false}>
        <StyledHeaderSELogo />
      </StyledHeaderLogoWrapper>
    </>
  );
};

export default HeaderComponent;
