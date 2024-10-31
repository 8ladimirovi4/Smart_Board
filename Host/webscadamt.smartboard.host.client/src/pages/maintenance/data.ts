import { v4 } from 'uuid';

export const NodeService = {
  getUpdateTableNodesData() {
    return [
      {
        id: v4(),
        name: 'Версия',
        value: '4.9.0.24637',
      },
      {
        id: v4(),
        name: 'Дата сборки',
        value: '13.09.2024 18:07:38',
      },
      {
        id: v4(),
        name: 'Авторские права',
        value: 'ООО "НТЦ "Механотроника"',
      },
      {
        id: v4(),
        name: 'Тел.',
        value: '8 (800) 250-63-60',
      },
      {
        id: v4(),
        name: 'Тел.',
        value: '8 (812) 654-35-85',
      },
      {
        id: v4(),
        name: 'E-mail',
        value: 'service.mt@systeme.ru',
      },
      {
        id: v4(),
        name: 'Веб-сайт',
        value: 'www.mtrele.ru',
      },
      {
        id: v4(),
        name: 'Путь к пакету обновлений',
        value: 'C:\\....',
      },
    ];
  },

  getUpdateTableNodes() {
    return Promise.resolve(this.getUpdateTableNodesData());
  },
};
