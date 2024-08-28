import { Component } from "react";
import { menuOptions } from "../NavigationData";
import { NavLink } from "react-router-dom";

import './NavigationDesktop.scss';

class NavigationDesktop extends Component {
    state = {
        showMenu: true
    }
    render() {
        const menu = menuOptions.map(option => (
            <li key={option.name} className='navigation-desktop__link'>
                <NavLink to={option.path}>{option.name}</NavLink>
            </li>
        ));
        return (
            <ul className='navigation-desktop'>
                {menu}
            </ul>
        );
    }
};

export default NavigationDesktop;