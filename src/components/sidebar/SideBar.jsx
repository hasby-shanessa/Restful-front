import { useNavigate } from 'react-router-dom';

import MenuItem from './MenuItem';
import profilePic from '../../assets/profile.png';

import './sidebar.css';

const SideBar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth');
  };

  return (
    <div className='side-bar'>
      <div className="profile">
        <figure className="avatar avatar-nav">
          <img
            src={profilePic}
            alt='-'
            className="rounded-circle"
          />
        </figure>
        <span className="user-name">{user?.name}</span>
      </div>
      <div className="menu">
        <ul className="menu-items">
          <MenuItem iClass='bx bxs-dashboard' linkTo='Dashboard' />
          <MenuItem iClass='bx bxs-user' linkTo='profile' />
        </ul>
        <div className="logout-btn" onClick={handleLogout}>
          <i className='bx bx-log-out'></i>
          <span className="link-name">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;