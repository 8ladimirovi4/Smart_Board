import TabviewComponent from 'components/tabview/TabviewComponent';
import { PageWrapper } from './styles';
import AuthSettings from './AuthSettings';
import Rols from './Rols';
import Users from './Users';

const Administration = () => {
  const tabs = [
    { header: 'Пользователи', content: <Users /> },
    { header: 'Роли', content: <Rols /> },
    { header: 'Настройки авторизации', content: <AuthSettings /> },
  ];

  return (
    <PageWrapper>
      <TabviewComponent tabs={tabs} defaultTab={1} />
    </PageWrapper>
  );
};

export default Administration;
