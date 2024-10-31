import styled from '@emotion/styled';
import { Menu } from 'primereact/menu';
import { IconProps } from './types';

export const StyledMenu = styled(Menu)`
  &.p-menu {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border-top: none;
    font-family: 'OpenSans-Regular', sans-serif;
    font-size: 15px;
    padding: 5px;
    overflow-y: hidden;

    /* скроллбар */
    ::-webkit-scrollbar {
      width: 10px;
      background-color: #f0f0f0;
    }

    /* Ползунок скроллбара */
    ::-webkit-scrollbar-thumb {
      background-color: #d3d3d3;
      border-radius: 9em;
      box-shadow: inset 1px 1px 5px #ffffff;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #c0c0c0;
    }

    /* Стрелки */
    ::-webkit-scrollbar-button:vertical:start:decrement,
    ::-webkit-scrollbar-button:vertical:end:increment {
      background: linear-gradient(120deg, #d3d3d3 40%, rgba(255, 255, 255, 0) 41%),
        linear-gradient(240deg, #d3d3d3 40%, rgba(255, 255, 255, 0) 41%),
        linear-gradient(0deg, #d3d3d3 30%, rgba(255, 255, 255, 0) 31%);
      background-color: #f0f0f0;
      height: 10px;
    }
    &.p-menu:hover {
      overflow-y: auto;
    }
  }

  .p-menuitem {
    margin-top: 20px;
  }

  .p-menuitem-icon {
    font-size: 24px;
  }
`;

export const StyledMenuItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  row-gap: 8px;
  padding: 5px;
  transition: transform 0.3s; /* Плавные переходы */

  &:active {
    transform: scale(0.9); /* Легкое уменьшение при клике */
  }
`;

export const StyledMeniItemName = styled.span`
  width: 120px;
  display: none;
`;

export const StyledIconWrapper = styled.div<IconProps>`
  width: 40px;
  height: 40px;
  /* background-image: url(${({ icon }) => icon}); */
  background-image: ${({ icon }) => `url("data:image/svg+xml,${encodeURIComponent(icon)}")`};
  background-size: contain;
  background-repeat: no-repeat;
`;
