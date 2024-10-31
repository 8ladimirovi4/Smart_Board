import { TreeProps } from 'primereact/tree';
import { StyledTree } from './styles';

const TreeComponent = ({
  value,
  metaKeySelection,
  selectionMode,
  selectionKeys,
  expandedKeys,
  onSelectionChange,
  onToggle,

  className,
}: TreeProps) => {
  return (
    <StyledTree
      value={value}
      metaKeySelection={metaKeySelection}
      selectionMode={selectionMode}
      selectionKeys={selectionKeys}
      expandedKeys={expandedKeys}
      onSelectionChange={onSelectionChange}
      onToggle={onToggle}
      className={className}
    />
  );
};

export default TreeComponent;
