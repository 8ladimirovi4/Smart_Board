import { useEffect, useState } from 'react';
import { PageWrapper, StyledButtonContainer, StyledUpdateColumn } from './styles';
import { NodeService } from './data';
import DatatableComponent from 'components/datatable/DatatableComponent';
import ButtonComponent from 'components/button/ButtonComponent';

const Update = () => {
  const [gridData, setGridData] = useState([]);
  const [btnState, setBtnState] = useState<boolean>(true);

  useEffect(() => {
    NodeService.getUpdateTableNodes().then((data: any) => setGridData(data));
  }, []);

  const columns = [
    { field: 'name', header: '' },
    { field: 'value', header: '' },
  ];
  return (
    <PageWrapper>
      <StyledUpdateColumn>
        <DatatableComponent columns={columns} items={gridData} />
        <StyledButtonContainer width={250}>
          <ButtonComponent label={'Обновить WebScadaMT'} disabled={btnState} onClick={() => {}} />
        </StyledButtonContainer>
      </StyledUpdateColumn>
    </PageWrapper>
  );
};

export default Update;
