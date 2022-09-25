import React from 'react';
import { Menu } from '../../components';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Menu />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
