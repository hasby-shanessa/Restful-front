import { NavLink } from 'react-router-dom';

import './menu.css';

const MenuItem = (props) => {
    return (
        <li className='menu-item'>
            <NavLink to={props.linkTo.split(' ')[0].toLowerCase()}>
                <i className={props.iClass}></i>
                <span className='link-name'>{props.linkTo}</span>
            </NavLink>
        </li>
    );
};

export default MenuItem;