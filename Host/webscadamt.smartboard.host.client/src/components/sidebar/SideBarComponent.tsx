import { MenuItemOptions, MenuItem } from 'primereact/menuitem';
import { classNames } from 'primereact/utils';
import { StyledIconWrapper, StyledMeniItemName, StyledMenu, StyledMenuItem } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  NodeService,
  AdministrationIcon,
  AlarmsIcon,
  DachboardsIcon,
  DevicesIcon,
  HomeIcon,
  MaintenanceIcon,
  MeasurementsIcon,
  SchemesIcon,
  SettingsIcon,
  ActiveHomeIcon,
  ActiveDachboardsIcon,
  ActiveSchemesIcon,
  ActiveAlarmsIcon,
  ActiveDevicesIcon,
  ActiveMeasurementsIcon,
  ActiveAdministrationIcon,
  ActiveMaintenanceIcon,
  ActiveSettingsIcon,
} from './data';
import { Tooltip } from 'primereact/tooltip';
import { v4 } from 'uuid';

const SideBarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState<string | undefined>('');
  const [clickedIcon, setClickedIcon] = useState<string | undefined>('');

  const startPagePath = location.pathname;

  useEffect(() => {
    NodeService.getPathMap().then((data: any) => setClickedIcon(data[startPagePath]));
  }, []);
  const itemTemplate = (item: MenuItem, options: MenuItemOptions) => {
    const Icon = clickedIcon === item.label || hoveredIcon === item.label ? item.data : item.icon;
    const tooltipId = `sidebar-icon${v4()}`;

    return (
      <StyledMenuItem
        id={tooltipId}
        role="menuitem"
        data-p-focused="false"
        className={classNames(options.className)}
        onClick={(evt) => {
          setClickedIcon(item.label);
          options.onClick(evt);
        }}
        onMouseEnter={() => setHoveredIcon(item.label)}
        onMouseLeave={() => setHoveredIcon('')}
      >
        <StyledIconWrapper icon={Icon} />
        <StyledMeniItemName className="p-menuitem-text">{item.label}</StyledMeniItemName>
        <Tooltip target={`#${tooltipId}`} content={item.label} position="left" />
      </StyledMenuItem>
    );
  };

  const items: MenuItem[] = [
    {
      label: 'Стартовая страница',
      icon: HomeIcon,
      data: ActiveHomeIcon,
      command: () => {
        navigate('/');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Дашборды',
      icon: DachboardsIcon,
      data: ActiveDachboardsIcon,
      command: () => {
        navigate('/dashboards');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Схемы',
      icon: SchemesIcon,
      data: ActiveSchemesIcon,
      command: () => {
        navigate('/schemes');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Тревоги',
      icon: AlarmsIcon,
      data: ActiveAlarmsIcon,
      command: () => {
        navigate('/alarms');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Устройства',
      icon: DevicesIcon,
      data: ActiveDevicesIcon,
      command: () => {
        navigate('/devices');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Измерения',
      icon: MeasurementsIcon,
      data: ActiveMeasurementsIcon,
      command: () => {
        navigate('/measurements');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Администрирование',
      icon: AdministrationIcon,
      data: ActiveAdministrationIcon,
      command: () => {
        navigate('/administration');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Обслуживание',
      icon: MaintenanceIcon,
      data: ActiveMaintenanceIcon,
      command: () => {
        navigate('/maintenance');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
    {
      label: 'Настройки',
      icon: SettingsIcon,
      data: ActiveSettingsIcon,
      command: () => {
        navigate('/settings');
      },
      template: (item: MenuItem, options: MenuItemOptions) => itemTemplate(item, options),
    },
  ];

  return <StyledMenu model={items} />;
};

export default SideBarComponent;
