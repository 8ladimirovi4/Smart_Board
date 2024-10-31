import { v4 } from 'uuid';
import { StyledColumn, StyledDatatble } from './styles';
import { DatatableProps } from './types';

const DatatableComponent = ({ columns, items, onRowEditComplete, onRowClick }: DatatableProps) => {
  if (columns && columns.length) {
    return (
      <StyledDatatble
        value={items}
        onRowEditComplete={onRowEditComplete}
        onRowClick={onRowClick}
        editMode="row"
        dataKey="id"
      >
        {columns.map((column) => (
          <StyledColumn
            key={v4()}
            field={column.field}
            header={column.header}
            body={column.body}
            align={column.align}
            style={column.style}
            editor={(options) => (column.editor ? column.editor(options) : null)}
            rowEditor={column.rowEditor}
          />
        ))}
      </StyledDatatble>
    );
  }
  return <></>;
};

export default DatatableComponent;
