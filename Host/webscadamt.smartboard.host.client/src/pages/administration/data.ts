import { v4 } from 'uuid';

export const NodeService = {
  getTreeNodesData() {
    return [
      {
        key: '0',
        label: 'Авторизация',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-file',
        children: [
          {
            key: '0-1',
            label: 'Вход',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-file',
          },
        ],
      },
      {
        key: '1',
        label: 'Пользователи',
        data: 'Events Folder',
        icon: 'pi pi-fw pi-file',
        children: [
          { key: '1-0', label: 'Просмотр', icon: 'pi pi-fw pi-file', data: 'Meeting' },
          { key: '1-1', label: 'Редактирование', icon: 'pi pi-fw pi-file', data: 'Product Launch' },
        ],
      },
      {
        key: '2',
        label: 'Конфигуратор опроса',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-file',
        children: [
          { key: '2-0', label: 'Просмотр', icon: 'pi pi-fw pi-file', data: 'Meeting' },
          { key: '2-1', label: 'Редактирование', icon: 'pi pi-fw pi-file', data: 'Product Launch' },
        ],
      },
      {
        key: '3',
        label: 'События',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-file',
        children: [
          { key: '3-0', label: 'Просмотр', icon: 'pi pi-fw pi-file', data: 'Meeting' },
          { key: '3-1', label: 'Квитирование', icon: 'pi pi-fw pi-file', data: 'Product Launch' },
        ],
      },
      {
        key: '4',
        label: 'Оборудование',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-file',
        children: [
          { key: '4-0', label: 'Просмотр', icon: 'pi pi-fw pi-file', data: 'Meeting' },
          { key: '4-1', label: 'Редактирование', icon: 'pi pi-fw pi-file', data: 'Product Launch' },
          { key: '4-2', label: 'Выполнение команд', icon: 'pi pi-fw pi-file', data: 'Product Launch' },
          { key: '4-3', label: 'Запись уставок', icon: 'pi pi-fw pi-file', data: 'Product Launch' },
        ],
      },
    ];
  },
  getRoleTableNodesData() {
    return [
      {
        id: v4(),
        name: 'system',
        permissions: '',
        trash: '',
      },
      {
        id: v4(),
        name: 'Инженер',
        permissions: '',
        trash: '',
      },
      {
        id: v4(),
        name: 'HMI',
        permissions: '',
        trash: '',
      },
    ];
  },
  getUsersTableNodesData() {
    return [
      {
        id: v4(),
        login: 'system',
        roles: ['Администрирование'],
        ip: '',
        home_page: 'select',
        key: 'key',
        trash: 'trash',
      },
      {
        id: v4(),
        login: 'Инженер',
        roles: ['Оператор', 'Инженер'],
        ip: '',
        home_page: 'select',
        key: 'key',
        trash: 'trash',
      },
      {
        id: v4(),
        login: 'HMI',
        roles: ['HMI'],
        ip: '192.168.0.10',
        home_page: 'select',
        key: 'key',
        trash: 'trash',
      },
    ];
  },
  getAuthSettingsTableNodesData() {
    return [
      {
        id: v4(),
        name: 'Стартовая страница',
        value: '1',
        type: '1',
      },
      {
        id: v4(),
        name: 'Разрешить гостевой доступ по IP',
        value: '',
        type: '2',
      },
      {
        id: v4(),
        name: 'Таймаут сессии, с',
        value: '20',
        type: '3',
      },
      {
        id: v4(),
        name: 'Кол-во попыток авторизации',
        value: '10',
        type: '3',
      },
      {
        id: v4(),
        name: 'Время блокировки пользователя, мин',
        value: '30',
        type: '3',
      },
    ];
  },
  getUsersTableNodes() {
    return Promise.resolve(this.getUsersTableNodesData());
  },
  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
  getRoleTableNodes() {
    return Promise.resolve(this.getRoleTableNodesData());
  },
  getAuthSettingsTableNodes() {
    return Promise.resolve(this.getAuthSettingsTableNodesData());
  },
};
