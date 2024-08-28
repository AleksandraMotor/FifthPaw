import { Component } from "react";
import { menuOptions } from "../NavigationData";
import { NavLink } from "react-router-dom";

import './NavigationDesktop';

class NavigationDesktop extends Component {
    state = {
        showMenu: true
    }
    render() {
        const menu = menuOptions.map(option => (
            <li key={option.name} className='navigation__link'>
                <NavLink to={option.path}>{option.name}</NavLink>
            </li>
        ));
        return (
            <ul className='navigation'>
                {menu}
                desktop
            </ul>
        );
    }
};

export default NavigationDesktop;