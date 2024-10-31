import Layout from 'components/layout/Layout';
import GlobalStyles from 'styles/GlobalStyles';
import PrimeReact from 'primereact/api';
import Home from 'pages/home/Home';
import PageNotFound from 'pages/404/PageNotFound';
import Administration from 'pages/administration/Administration';
import Maintenance from 'pages/maintenance/Maintenance';
import Settings from 'pages/settings/Settings';
import Dashboards from 'pages/dashboards/Dashboards';
import Schemes from 'pages/schemes/Schemes';
import Alarms from 'pages/alarms/Alarms';
import Devices from 'pages/devices/Devices';
import Measurements from 'pages/measurements/Measurements';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from 'pages/maintenance/Update';
import Project from 'pages/settings/Project';

const App = () => {
  PrimeReact.zIndex = {
    modal: 1100, // dialog, sidebar
    overlay: 1000, // dropdown, overlaypanel
    menu: 1000, // overlay menus
    tooltip: 1100, // tooltip
    toast: 1200, // toast
  };
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/alarms" element={<Alarms />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/measurements" element={<Measurements />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/maintenance/update" element={<Update />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/project" element={<Project />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
