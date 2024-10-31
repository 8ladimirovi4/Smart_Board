import { ColumnEditorOptions } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';

export interface ButtonContainerProps {
  width?: number;
  height?: number;
}

export interface UsersDataTableProps {
  id: string;
  login: string;
  roles: [];
  ip: string;
  home_page: string;
  key: string;
  trash: string;
}

export interface TableColumn<T> {
  field?: keyof T; // Поле данных, которое колонка будет отображать
  header?: string; // Заголовок колонки
  body?: (rowData: T) => JSX.Element; // Функция для рендеринга кастомного содержимого
  editor?: (options: ColumnEditorOptions) => JSX.Element;
  rowEditor?: (rowData: RolesDataTableProps) => string;
  align?: 'left' | 'center' | 'right'; // Выравнивание по горизонтали в колонке
  style?: React.CSSProperties; // Стили для колонки
}

export interface RolesDataTableProps {
  id: string;
  name: string;
  permissions: string;
  trash: string;
}

export interface UserAuthDataTableProps {
  id: string;
  name: string;
  value: string | boolean | undefined;
  type: string;
}

export interface TreeValues {
  [key: string]: any;
}

export interface CustomTreeNode extends TreeNode {
  key: string;
  children: CustomTreeNode[]; // Меняем тип children на CustomTreeNode[]
}
