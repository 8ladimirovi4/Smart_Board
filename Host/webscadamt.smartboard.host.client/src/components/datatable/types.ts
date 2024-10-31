import { DataTableRowClickEvent, DataTableRowEditCompleteEvent } from 'primereact/datatable';

interface TableColumn<T> {
  [key: string]: any;
}

interface Item {
  [key: string]: any;
}

export interface DatatableProps {
  columns: TableColumn<Item>[] | null;
  items: Item[] | undefined;
  onRowEditComplete?: (evt: DataTableRowEditCompleteEvent) => void;
  onRowClick?: (evt: DataTableRowClickEvent) => void;
}
