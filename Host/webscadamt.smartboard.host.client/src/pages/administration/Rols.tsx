import ButtonComponent from 'components/button/ButtonComponent';
import DatatableComponent from 'components/datatable/DatatableComponent';
import IconComponent from 'components/icon/IconComponent';
import TreeComponent from 'components/tree/TreeComponent';
import {
  StyledButtonContainer,
  StyledRolesWrapper,
  StyledToolbar,
  StyledToolbarWrapper,
  StyledToolbarControl,
  StyledToolbarHeader,
  StyledIconWrapper,
} from './styles';
import { v4 } from 'uuid';
import { TreeValues, RolesDataTableProps, TableColumn, CustomTreeNode } from './types';
import { useEffect, useState } from 'react';
import { faTrash, faExclamationCircle, faCheckSquare, faSquare, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { DataTableRowEditCompleteEvent } from 'primereact/datatable';
import { ColumnEditorOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from './data';
import { TreeCheckboxSelectionKeys, TreeExpandedKeysType } from 'primereact/tree';
import { Tooltip } from 'primereact/tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rols = () => {
  const [gridData, setGridData] = useState<RolesDataTableProps[]>([]);

  const [nodes, setNodes] = useState<CustomTreeNode[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<TreeCheckboxSelectionKeys | {}>({});
  const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({});
  const [metaKey] = useState<boolean>(false);

  useEffect(() => {
    NodeService.getRoleTableNodes().then((data: any) => setGridData(data));
    NodeService.getTreeNodes().then((data: any) => setNodes(data));
  }, []);

  const addRow = () => {
    if (gridData) {
      const newRow: RolesDataTableProps = {
        id: v4(),
        name: ' ',
        permissions: '',
        trash: '',
      };
      setGridData([...gridData, newRow]);
    }
  };

  const onRowEditComplete = (evt: DataTableRowEditCompleteEvent) => {
    let _gridData = [...gridData];
    let { newData, index } = evt;

    _gridData[index] = newData as RolesDataTableProps;

    setGridData(_gridData);
  };

  const textEditor = (options: ColumnEditorOptions) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback!(e.target.value)}
      />
    );
  };

  const allowEdit = (rowData: RolesDataTableProps) => {
    return rowData.name;
  };

  const handlePermissionClick = (id: string) => {};

  const permissionTemplate = (rowData: RolesDataTableProps) => {
    return (
      <StyledIconWrapper>
        <IconComponent
          icon={faExclamationCircle}
          style={{ color: '#ffa500ab' }}
          onClick={() => handlePermissionClick(rowData.id)}
        />
      </StyledIconWrapper>
    );
  };

  const handleDeleteRow = (id: string) => {
    if (gridData) {
      setGridData(gridData.filter((product) => product.id !== id));
    }
  };

  const trashTemplate = (rowData: RolesDataTableProps) => {
    const tooltipId = `trash-tooltip-${rowData.id}`;

    return (
      <StyledIconWrapper>
        <IconComponent
          id={tooltipId}
          icon={faTrash}
          style={{ cursor: 'pointer' }}
          onClick={() => handleDeleteRow(rowData.id)}
        />
        <Tooltip target={`#${tooltipId}`} content="Удалить пользователя" position="left" />
      </StyledIconWrapper>
    );
  };

  const columns: TableColumn<RolesDataTableProps>[] = [
    { field: 'name', header: 'Наименование', style: { borderRight: 'none' }, editor: textEditor },
    { align: 'center', style: { width: '120px', borderLeft: 'none' }, rowEditor: allowEdit },
    { field: 'permissions', align: 'center', style: { width: '80px', minWidth: '80px' }, body: permissionTemplate },
    { field: 'trash', align: 'center', style: { width: '80px', minWidth: '80px' }, body: trashTemplate },
  ];

  const toggleSelectAll = (nodes: CustomTreeNode[], type: string) => {
    const setStateToAllKeys = function (nodes: CustomTreeNode[], value: any, values: TreeValues = {}): TreeValues {
      for (let i = 0; i < nodes.length; i++) {
        values[nodes[i].key] = value;

        if (nodes[i].children && nodes[i].children.length) {
          setStateToAllKeys(nodes[i].children, value, values);
        }
      }
      return values;
    };
    switch (type) {
      case 'CHECK_ALL':
        setSelectedKeys(setStateToAllKeys(nodes, { checked: true, partialChecked: false }));
        break;
      case 'UNCHECK_ALL':
        setSelectedKeys({});
        break;
      case 'EXPAND_ALL':
        setExpandedKeys(setStateToAllKeys(nodes, true));
        break;
      case 'COLLAPSE_ALL':
        setExpandedKeys({});
        break;
      default:
        break;
    }
  };

  const startContent = (
    <StyledToolbarWrapper>
      <StyledToolbarHeader>
        <span>Разрешения</span>
        <StyledToolbarControl>
          <StyledButtonContainer width={26} height={26}>
            <ButtonComponent icon={<FontAwesomeIcon icon={faCheckSquare}/>} onClick={() => toggleSelectAll(nodes, 'CHECK_ALL')} />
          </StyledButtonContainer>
          <StyledButtonContainer width={26} height={26}>
            <ButtonComponent icon={<FontAwesomeIcon icon={faSquare}/>} onClick={() => toggleSelectAll(nodes, 'UNCHECK_ALL')} />
          </StyledButtonContainer>
          <StyledButtonContainer width={26} height={26}>
            <ButtonComponent icon={<FontAwesomeIcon icon={faPlus}/>} onClick={() => toggleSelectAll(nodes, 'EXPAND_ALL')} />
          </StyledButtonContainer>
          <StyledButtonContainer width={26} height={26}>
            <ButtonComponent icon={<FontAwesomeIcon icon={faMinus}/>} onClick={() => toggleSelectAll(nodes, 'COLLAPSE_ALL')} />
          </StyledButtonContainer>
        </StyledToolbarControl>
      </StyledToolbarHeader>
      <TreeComponent
        value={nodes}
        metaKeySelection={metaKey}
        selectionMode="checkbox"
        selectionKeys={selectedKeys}
        expandedKeys={expandedKeys}
        onSelectionChange={(evt) => setSelectedKeys(evt.value ? evt.value : {})}
        onToggle={(evt) => setExpandedKeys(evt.value)}
        className="w-full md:w-30rem"
      />
    </StyledToolbarWrapper>
  );

  return (
    <>
      <StyledButtonContainer width={150}>
        <ButtonComponent label={'Добавить'} onClick={addRow} />
      </StyledButtonContainer>
      <StyledRolesWrapper>
        <DatatableComponent
          columns={columns}
          items={gridData}
          onRowEditComplete={onRowEditComplete}
          onRowClick={() => {}}
        />

        <div className="card">
          <StyledToolbar start={startContent} />
        </div>
      </StyledRolesWrapper>
    </>
  );
};

export default Rols;
