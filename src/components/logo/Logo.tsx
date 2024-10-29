import { NavLink } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'

import './Logo.scss';

const Logo = () => {

    return (
        <NavLink to='/' className='logo' onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Logo PiątaŁapa" width='190' height='80'/>
        </NavLink>
    );
};

export default Logo;