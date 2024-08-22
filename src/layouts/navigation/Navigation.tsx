import { NavLink } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import { Component, ReactNode } from 'react';

const menuOptions = [
    { name: 'adopcja', path: '/adoption' },
    { name: 'ogłoszenia', path: '/news' },
    { name: 'jak pomóc?', path: '/help' },
    { name: 'o nas', path: '/about' },
    { name: 'kontakt', path: '/contact' }
]

class Navigation extends Component <{ screenWidth: number }> {
    state = {
        showMenu: false
    }
    render() {
        const menu = menuOptions.map(option => (
            <li key={option.name} className='menu__navigation'>
                <NavLink to={option.path} className='menu__navigation__tab'>{option.name}</NavLink>
            </li>
        ));
        return (
            <>
                <Logo/>

                <ul className='menu'>
                    {menu}
                </ul>
            </>
        );
    }

};

export default Navigation;