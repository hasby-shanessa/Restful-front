import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';

import './layout.css'

const Layout = () => {
  return (
    <div className='main layout'>
      <SideBar />
      <div className='layout__content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;