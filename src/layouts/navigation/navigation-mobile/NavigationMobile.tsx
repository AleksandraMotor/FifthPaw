import { Component } from "react";
import { menuOptions } from "../NavigationData";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

class NavigationMobile extends Component {
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
            <ul className={classNames({
                'navigation': true,
                'navigation--hide': (!this.state.showMenu),
            })}>
                {menu}
                mobile
            </ul>
        );
    }
};

export default NavigationMobile;