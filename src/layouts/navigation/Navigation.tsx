import { NavLink } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'

const menuOptions = [
    { name: 'adopcja', path: '/adoption' },
    { name: 'ogłoszenia', path: '/news' },
    { name: 'jak pomóc?', path: '/help' },
    { name: 'o nas', path: '/about' },
    { name: 'kontakt', path: '/contact' }
]

const Navigation = () => {
    const menu = menuOptions.map(option => (
        <li key={option.name} className='menu__navigation'>
            <NavLink to={option.path} className='menu__navigation__tab'>{option.name}</NavLink>
        </li>
    ));
    return (
        <>
            <NavLink to='/' className='menu__logo'>
                <img src={logo} alt="Logo PiątaŁapa"/>
            </NavLink>
            <ul className='menu'>
                {menu}
            </ul>
        </>
    );
};

export default Navigation;