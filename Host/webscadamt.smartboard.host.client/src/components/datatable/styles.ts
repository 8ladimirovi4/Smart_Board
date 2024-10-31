import styled from '@emotion/styled';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const StyledDatatble = styled(DataTable)`
  width: 100%;

  &.p-datatable .p-datatable-table {
    border: 1px solid #e5e7eb;
    border-collapse: collapse;
  }

  &.p-datatable tr td {
    border: 1px solid #e5e7eb;
  }

  &.p-datatable tr th {
    border: 1px solid #e5e7eb;
  }

  /* &.p-datatable .p-datatable-table .p-datatable-tbody tr td:last-child{
    width: 80px;
  } */
`;

export const StyledColumn = styled(Column)``;
