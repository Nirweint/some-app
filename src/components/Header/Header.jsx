import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return <header className='header'>
        <img src='https://seeklogo.net/wp-content/uploads/2019/01/dji-logo.png' alt='logo'/>

        <div className="login-block">
            {props.isAuth ? props.login
            : <NavLink className="login-block-text" to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;