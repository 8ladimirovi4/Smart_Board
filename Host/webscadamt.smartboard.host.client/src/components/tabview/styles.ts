import styled from '@emotion/styled';
import { TabView } from 'primereact/tabview';

export const StyledTabView = styled(TabView)`
  width: 100%;

  /* tab header container */
  &.p-tabview .p-tabview-nav {
    display: flex;
    gap: 1px;
  }
  /* tab header */
  &.p-tabview .p-tabview-nav li {
    width: 100%;
  }

  /*tab link not selected */
  &.p-tabview .p-tabview-nav li .p-tabview-nav-link {
    display: flex;
    justify-content: center;
    background: #dcdcdc;
    color: #838383;
    height: 50px;
  }
  /*tab link hover */
  &.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: #d3d3d3;
    color: #838383;
  }

  /*tab link selected */
  &.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #d3d3d3;
    color: #0bc8cc;
    border-bottom: 3px solid #0bc8cc;
  }

  /* tab panel container*/
  &.p-tabview .p-tabview-panels {
  }

  /* tab panel */
  &.p-tabview .p-tabview-panel {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
