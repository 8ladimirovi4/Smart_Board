import { TabPanel } from 'primereact/tabview';
import { TabViewComponentProps } from './types';
import { StyledTabView } from './styles';
import { v4 } from 'uuid';

const TabviewComponent = ({ tabs, defaultTab = 1 }: TabViewComponentProps) => {
  return (
    <StyledTabView activeIndex={defaultTab - 1}>
      {tabs.map((tab) => (
        <TabPanel key={v4()} header={tab.header}>
          {tab.content}
        </TabPanel>
      ))}
    </StyledTabView>
  );
};

export default TabviewComponent;
