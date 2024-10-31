import DatatableComponent from 'components/datatable/DatatableComponent';
import DropdownComponent from 'components/dropdown/DropdownComponent';
import { useEffect, useState } from 'react';
import { NodeService } from './data';
import { Checkbox } from 'primereact/checkbox';
import { UserAuthDataTableProps } from './types';

const AuthSettings = () => {
  const [gridData, setGridData] = useState<UserAuthDataTableProps[]>([]);
  const [dropDownValues] = useState([
    { label: 'О Системе', value: '1' },
    { label: 'Дашборд2', value: '2' },
    { label: 'Дашборд3', value: '3' },
  ]);

  useEffect(() => {
    NodeService.getAuthSettingsTableNodes().then((data: any) => setGridData(data));
  }, []);

  const handleDropdownChange = (rowData: UserAuthDataTableProps, value: string) => {
    if (gridData) {
      const updatedItems = gridData.map((item) => {
        if (item.id === rowData.id) {
          return { ...item, value };
        }
        return item;
      });

      setGridData(updatedItems);
    }
  };

  const handleCheckboxChange = (rowData: UserAuthDataTableProps, checked: boolean | undefined) => {
    const updatedItems = gridData.map((item) => (item.id === rowData.id ? { ...item, value: checked } : item));
    setGridData(updatedItems);
  };

  const valueBodyTemplate = (rowData: UserAuthDataTableProps) => {
    switch (rowData.type) {
      case '1':
        return (
          <DropdownComponent
            value={rowData.value}
            onChange={(evt) => handleDropdownChange(rowData, evt.value)}
            options={dropDownValues}
          />
        );
      case '2':
        return (
          <Checkbox
            checked={typeof rowData.value === 'boolean' ? rowData.value : false}
            onChange={(e) => handleCheckboxChange(rowData, e.checked)}
          />
        );
      case '3':
        return <span>{rowData.value}</span>;
      default:
        return <span>{rowData.value}</span>;
    }
  };

  const columns = [
    { field: 'name', header: 'Наименование' },
    {
      field: 'value',
      header: 'Значение',
      style: { width: '300px', minWidth: '300px' },
      align: 'center',
      body: valueBodyTemplate,
    },
  ];
  return <DatatableComponent columns={columns} items={gridData} />;
};

export default AuthSettings;
