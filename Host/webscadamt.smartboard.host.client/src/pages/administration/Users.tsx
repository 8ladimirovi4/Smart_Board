import ButtonComponent from 'components/button/ButtonComponent';
import ChipComponent from 'components/chip/ChipComponent';
import DatatableComponent from 'components/datatable/DatatableComponent';
import DropdownComponent from 'components/dropdown/DropdownComponent';
import IconComponent from 'components/icon/IconComponent';
import { StyledButtonContainer, StyledIconWrapper } from './styles';
import { UsersDataTableProps, TableColumn } from './types';
import { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { v4 } from 'uuid';
import { NodeService } from './data';
import { Tooltip } from 'primereact/tooltip';

const Users = () => {
  const [gridData, setGridData] = useState<UsersDataTableProps[]>();
  const [dropDownValues] = useState([
    { label: 'Дашборд для HDMI', value: '1' },
    { label: 'Дашборд2', value: '2' },
    { label: 'Дашборд3', value: '3' },
  ]);

  useEffect(() => {
    NodeService.getUsersTableNodes().then((data: any) => setGridData(data));
  }, []);

  const addRow = () => {
    if (gridData) {
      const newRow: UsersDataTableProps = {
        id: v4(),
        login: '',
        roles: [],
        ip: '',
        home_page: '',
        key: '',
        trash: '',
      };
      setGridData([...gridData, newRow]);
    }
  };

  const rolesTemplate = (rowData: UsersDataTableProps) => {
    return (
      <>
        {rowData.roles && rowData.roles.length
          ? rowData.roles.map((role: string) => <ChipComponent key={role} label={role} removable />)
          : null}
      </>
    );
  };

  const handleDropdownChange = (rowData: UsersDataTableProps, value: string) => {
    if (gridData) {
      const updatedProducts = gridData.map((product) => {
        if (product.id === rowData.id) {
          return { ...product, home_page: value };
        }
        return product;
      });

      setGridData(updatedProducts);
    }
  };

  const dashboardsTemplate = (rowData: UsersDataTableProps) => {
    return (
      <DropdownComponent
        value={rowData.home_page}
        onChange={(evt) => handleDropdownChange(rowData, evt.value)}
        options={dropDownValues}
        styles={{ width: 250 }}
        placeholder="Выберите дашборд"
      />
    );
  };

  const handleDeleteRow = (id: string) => {
    if (gridData) {
      setGridData(gridData.filter((product) => product.id !== id));
    }
  };

  const trashTemplate = (rowData: UsersDataTableProps) => {
    const tooltipId = `trash-tooltip-${rowData.id}`;

    return (
      <StyledIconWrapper>
        <IconComponent
          id={tooltipId}
          icon={faTrash}
          style={{ cursor: 'pointer', color: 'grey' }}
          onClick={() => handleDeleteRow(rowData.id)}
        />
        <Tooltip target={`#${tooltipId}`} content="Удалить пользователя" position="left" />
      </StyledIconWrapper>
    );
  };

  const keyTemplate = (rowData: UsersDataTableProps) => {
    return (
      <StyledIconWrapper>
        <IconComponent icon={faKey} style={{ color: '#756efd' }} />
      </StyledIconWrapper>
    );
  };

  const columns: TableColumn<UsersDataTableProps>[] = [
    { field: 'login', header: 'Логин' },
    { field: 'roles', header: 'Роли', body: rolesTemplate },
    { field: 'ip', header: 'IP-адрес' },
    {
      field: 'home_page',
      header: 'Домашняя страница',
      style: { width: '300px', minWidth: '300px' },
      align: 'center',
      body: dashboardsTemplate,
    },
    { field: 'key', align: 'center', style: { width: '80px', minWidth: '80px' }, body: keyTemplate },
    { field: 'trash', align: 'center', style: { width: '80px', minWidth: '80px' }, body: trashTemplate },
  ];

  return (
    <>
      <StyledButtonContainer width={150}>
        <ButtonComponent label={'Добавить'} onClick={addRow} />
      </StyledButtonContainer>
      <DatatableComponent columns={columns} items={gridData} />
    </>
  );
};

export default Users;
